import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({
	data: await sql`
SELECT content.title, content.description AS "info-text" FROM "content" INNER JOIN issue_content_rel on "content"."id"= issue_content_rel.content_id INNER JOIN issues on issues.id= issue_content_rel.issue_id WHERE issue_id=1;
`});

export default handler;