import sql from "~/lib/postgres";

const handler = async ({ method, query: { id } }, res) => {
	if (method === "GET") {
		const checkID = await sql`SELECT * FROM issues WHERE id=${id}`;
		if (checkID.count === 0) {
			res.status(400).json({ message: `There is no content related to this issue id: ${id}` })
		} else {
			res.status(200).json({ data: await sql`SELECT content.* FROM content INNER JOIN issue_content_rel on content.id= issue_content_rel.content_id INNER JOIN issues on issues.id=${id};` })
		}
	}
}

export default handler;