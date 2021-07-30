import sql from "~/lib/postgres";

const handler = async ({ method, query: { slug } }, res) => {
  if (method === "GET") {
    const checkID = await sql`SELECT * FROM categories WHERE id=${slug}`;
    if (checkID.count === 0) {
      return res
        .status(400)
        .json({ message: `There is no category with the id: ${slug}` });
    } else {
      return res.status(200).json({
        data: await sql`SELECT content.* FROM content INNER JOIN issue_content_rel on content.id=issue_content_rel.content_id INNER JOIN issues on issue_content_rel.issue_id=issues.id INNER JOIN categories On issues.category_id=categories.id WHERE categories.id=${id};`,
      });
    }
  }
};

export default handler;
