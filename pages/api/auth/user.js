require("dotenv").config();
import sql from "~/lib/postgres";
import { verify } from "jsonwebtoken";

const handler = async ({ cookies: { token } }, res) => {
  if (!token) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const decodedToken = verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!token || !decodedToken) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const [user] =
    await sql`SELECT * FROM users WHERE email=${decodedToken.email}`;
  return res.status(200).json(user);
};

export default handler;
