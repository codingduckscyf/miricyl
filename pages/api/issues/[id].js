import sql from "~/lib/postgres";

const handler = async ({ query: { id } }, res) => res.status(200).json({ data: (await sql`SELECT name, description FROM issues WHERE id=${id}`)[0] });

export default handler;