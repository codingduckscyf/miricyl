import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({ data: await sql`SELECT name, description FROM issues WHERE category_id=1;` })

export default handler