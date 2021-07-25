import sql from "~/lib/postgres";

const handler = async (req, res) => res.status(200).json({
	data: await sql`
SELECT * FROM content WHERE content_type='video';
`});

export default handler;