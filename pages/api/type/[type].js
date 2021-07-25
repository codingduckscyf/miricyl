import sql from "~/lib/postgres";

const handler = async ({ query: { type } }, res) => {
	const types = await sql`select DISTINCT(content_type) from content;`
	if (types.find(elem => elem.content_type === type)) {
		res.status(200).json({
			data: await sql`SELECT * FROM content WHERE content_type=${type};`
		})
	} else {
		res.status(400).json({ message: "Not a valid type" })
	}
}

export default handler;