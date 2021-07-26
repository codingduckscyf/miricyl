import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({ data: await sql`SELECT DISTINCT(content_type) AS "type" FROM content;` });

export default handler;