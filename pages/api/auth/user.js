// check for token
//verify if token exists
//find the user and send the user back || send invalid
// check if a user is logged in the frontend
//useffect check this endpoint
require("dotenv").config();
import sql from "postgres";

const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    console.log(authorization);
    return authorization.substring(7);
  }
  return null;
};

export const handler = async (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log("Token", token, "decoded", decodedToken);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);
};
