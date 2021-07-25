import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({ data: await sql`SELECT name, description FROM issues;` });

export default handler;