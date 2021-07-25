import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({ data: await sql`select DISTINCT(content_type) AS "type" from content;` });

export default handler;