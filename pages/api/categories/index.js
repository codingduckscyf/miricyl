import sql from "~/lib/postgres";

const handler = async (req, res) => {
  return res.status(200).json({ data: await sql`SELECT * FROM categories;` });
};

export default handler;
