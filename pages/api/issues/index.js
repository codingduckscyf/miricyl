import sql from "~/lib/postgres";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({
      data: await sql`select issues.*, categories.slug from issues inner join categories on issues.category_id=categories.id;`,
    });
  }
  if (req.method === "POST") {
    const { categoryID, name, description } = req.body;
    const checkName = await sql`SELECT * FROM issues WHERE name=${name}`;
    if (!categoryID || !name || !description) {
      return res
        .status(400)
        .json({ message: `Please fill all the required fields` });
    }
    if (checkName.count === 0) {
      const [issue] =
        await sql`INSERT INTO issues (category_id, name, description) VALUES (${categoryID}, ${name}, ${description}) RETURNING *`;
      return res.status(200).json({
        message: `Issue with the id: ${issue.id} and name: ${issue.name} were added to the database`,
        data: issue,
      });
    } else {
      return res
        .status(400)
        .json({ message: `Issue with the name: ${name} already exists` });
    }
  }
};

export default handler;
