import sql from "~/lib/postgres";

const handler = async ({ method, body: { title, description, content_type, img_url, video_url }, query: { id } }, res) => {
	if (method === "GET") {
		const checkContentID = await sql`SELECT * FROM content WHERE id=${id}`;
		if (checkContentID.count === 0) {
			return res.status(400).json({ message: "There is no content with that id" });
		} else {
			return res.status(200).json({ data: await sql`SELECT * FROM content WHERE id=${id}` })
		}
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
	if (method === "PUT") {
		const checkContentID = await sql`SELECT * FROM content WHERE id=${id}`;
		if (checkContentID.count === 0) {
			return res.status(400).json({ message: `There is no content with the id: ${id}` })
		} else {
			const valuesToUpdate = {
				updated_at: new Date(),
				title: title ? title : checkContentID[0].title,
				description: description ? description : checkContentID[0].description,
				content_type: content_type ? content_type : checkContentID[0].content_type,
				img_url: img_url ? img_url : checkContentID[0].img_url,
				video_url: video_url ? video_url : checkContentID[0].video_url
			}
			const [updatedContent] = await sql`UPDATE content SET ${sql(valuesToUpdate, ...Object.keys(valuesToUpdate))} WHERE id=${id} RETURNING *`;
			return res.status(200).json({
				message: `Content with the id: ${updatedContent.id} and title: ${updatedContent.title} has been updated`,
				dataUpdated: updatedContent
			});
		}
	}
}
export default handler;