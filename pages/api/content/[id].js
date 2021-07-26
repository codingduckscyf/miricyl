import sql from "~/lib/postgres";

const handler = async ({ method, query: { id } }, res) => {
	if (method === "GET") {
		res.status(200).json({
			data: await sql`
		SELECT content.title, content.description, content.content_type, img_url, video_url FROM content INNER JOIN issue_content_rel on content.id= issue_content_rel.content_id INNER JOIN issues on issues.id=${req.query.id};`
		})
	}
	if (method === "DELETE") {
		const checkContentID = await sql`SELECT * FROM content WHERE id=${id}`;
		const [deletedContent] = await sql`DELETE FROM content WHERE id=${id} RETURNING *`;
		if (checkContentID.count === 0) {
			return res.status(400).json({ message: "There is no content with that id" });
		} else {
			return res.status(200).json({
				message: `Content with id: ${deletedContent.id} and title: ${deletedContent.title} was deleted from the database`,
			})
		}
	}
}
export default handler;