import sql from "~/lib/postgres";

const handler = async ({ query: { id } }, res) => {
	return res.status(200).json({ data: (await sql`SELECT * FROM categories WHERE id=${id};`)[0] });
};

export default handler;