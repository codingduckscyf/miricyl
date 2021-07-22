import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({ data: await sql`SELECT name, description FROM issues where category_id=2;` });

export default handler;