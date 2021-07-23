import sql from "~/lib/postgres";

const handler = async ({ query: { id } }, res) => {
  res
    .status(200)
    .json({ data: (await sql`SELECT * FROM categories WHERE id=${id};`)[0] });
};

export default handler;
