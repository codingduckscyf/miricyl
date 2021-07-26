import sql from "~/lib/postgres";

const handler = async (req, res) => {
	if (req.method === "GET") {
		res.status(200).json({ data: await sql`SELECT * FROM content;` });
	}
	if (req.method === "POST") {
		const { title, content_type, description, issueID, img_url, video_url } = req.body;

		const checkContentTitle = await sql`SELECT * FROM content WHERE title=${title};`;

		const checkIssueID = await sql`SELECT * FROM issues WHERE id=${issueID};`;
		console.log(checkIssueID)

		if (!title || !content_type || !description || !issueID) {
			res.status(400).json({ message: "Please fill the required fields" });
		}
		if (checkContentTitle.count !== 0) {
			res.status(400).json({ message: `Content with the title: ${title} already exists` })
		}
		if (checkIssueID.count === 0) {
			res.status(400).json({ message: `There is no issue with the id: ${issueID}` })
		} else {
			const insertContentData = await sql`INSERT INTO content (title, description, content_type, video_url, img_url) VALUES (${title}, ${description}, ${content_type}, ${video_url}, ${img_url}) RETURNING id;`;
			const insertContentAndIssueIDs = await sql`INSERT INTO issue_content_rel (issue_id, content_id) values (${Number(issueID)}, ${insertContentData[0].id}) RETURNING issue_id, content_id;`;
			res.status(200).json({ message: `ContentID: ${insertContentAndIssueIDs[0].issue_id} and issueID: ${insertContentAndIssueIDs[0].content_id}` });
		}
	}
}

export default handler;