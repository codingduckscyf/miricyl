import { serialize } from "cookie";

const handler = async ({ method }, res) => {
  if (method === "GET") {
    const tokenDeleted = serialize(
      "token",
      {},
      {
        httpOnly: true,
        maxAge: -1,
      }
    );
    res.setHeader("Set-Cookie", tokenDeleted);
    return res.status(200).send({ message: "Cookie Deleted" });
  }
};

export default handler;
