import sql from "~/lib/postgres";

const handler = async (req, res) => {
	if (req.method === "GET") {
		return res.status(200).json({ data: await sql`SELECT * FROM content;` });
	}
	if (req.method === "POST") {
		const { title, content_type, description, img_url, video_url } = req.body;

		if (!title || !content_type || !description) {
			return res.status(400).json({ message: "Please fill the required fields" });
		}
		
		const checkContentTitle = await sql`SELECT * FROM content WHERE title=${title};`;

		if (checkContentTitle.count !== 0) {
			return res.status(400).json({ message: `Content with the title: ${title} already exists` })
		} else {
			const [content] = await sql`INSERT INTO content (title, description, content_type, video_url, img_url) VALUES (${title}, ${description}, ${content_type}, ${video_url}, ${img_url}) RETURNING id;`;

			return res.status(200).json({ message: `Content with the id: ${content.id} was added to the database` });
		}
	}
}
export default handler;