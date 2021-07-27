import sql from "~/lib/postgres";

const handler = async ({ method, query: { id } }, res) => {
	if (method === "GET") {
		return res.status(200).json({ data: (await sql`SELECT * FROM issues WHERE id=${id}`)[0] });
	}
}

export default handler;