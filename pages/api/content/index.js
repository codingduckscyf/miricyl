import sql from "~/lib/postgres";

const handler = async (req, res) => {
  const issuesTest = await sql`SELECT * FROM issues;`;
  if (req.method === "GET") {
    return res.status(200).json({ data: await sql`SELECT * FROM content;` });
  }
  if (req.method === "POST") {
    const { title, content_type, description, img_url, video_url, relations } =
      req.body;
    const contentObj = {
      title: title,
      content_type: content_type,
      img_url: img_url ? img_url : null,
      video_url: video_url ? video_url : null,
      description: description,
    };

    if (!title || !content_type || !description) {
      return res
        .status(400)
        .json({ message: "Please fill the required fields" });
    }
    const checkContentTitle =
      await sql`SELECT * FROM content WHERE title=${title};`;

    if (checkContentTitle.count !== 0) {
      return res
        .status(400)
        .json({ message: `Content with the title: ${title} already exists` });
    } else {
      const [content] = await sql`INSERT INTO content ${sql(
        contentObj,
        ...Object.keys(contentObj)
      )} RETURNING *;`;
      const [issue_rel] =
        await sql`INSERT INTO issue_content_rel (issue_id, content_id) VALUES (${relations}, ${content.id}) RETURNING *;`;
      return res.status(200).json({
        message: `Content with the id: ${content.id} was added to the database`,
        data: content,
        relation: issue_rel,
      });
    }
  }
};
export default handler;
