require("dotenv").config();
import bcrypt from "bcrypt";
import sql from "~/lib/postgres";
import * as yup from "yup";
import jwt from "jsonwebtoken";

const schema = yup.object().shape({
  email: yup.string().email().required().lowercase(),
  hash_password: yup.string().required().min(6),
});

const getTokenFrom = async (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const handler = async ({ method, body: { email, password } }, res) => {
  if (method === "POST") {
    const user = {
      email: email,
      hash_password: password,
    };
    const schemaValid = await schema.validate(user);
    if (schemaValid) {
      const userExists =
        await sql`SELECT * FROM users WHERE email=${schemaValid.email}`;
      if (userExists.count > 0) {
        try {
          const userValid = await bcrypt.compare(
            password,
            userExists[0].hash_password
          );
          if (userValid) {
            const jsonToken = await jwt.sign(
              user,
              process.env.ACCESS_TOKEN_SECRET
            );
            return res
              .status(200)
              .send({ token: jsonToken, email: schemaValid.email });
          } else {
            return res
              .status(400)
              .json({ message: "Email or password incorrect" });
          }
        } catch (error) {
          res.status(500).json({ errorMessage: error });
        }
      } else {
        return res.status(400).send({ message: "Email or password incorrect" });
      }
    } else {
      return res.status(400).json({ message: "Not valid data" });
    }
  }
};

export default handler;