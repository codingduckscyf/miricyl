import sql from "~/lib/postgres";

const handler = async ({ query: { id } }, res) => {
	res.status(200).json({
		data: await sql`
	SELECT content.title, content.description, content.content_type, img_url, video_url FROM content INNER JOIN issue_content_rel on content.id= issue_content_rel.content_id INNER JOIN issues on issues.id=${id};`
	})
}
export default handler;