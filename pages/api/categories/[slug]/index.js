import sql from "~/lib/postgres";

const handler = async ({ query: { slug } }, res) => {
  const [data] = await sql`SELECT * FROM categories WHERE slug=${slug};`;

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(data);
};

export default handler;
