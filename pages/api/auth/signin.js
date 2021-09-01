require("dotenv").config();
import bcrypt from "bcrypt";
import sql from "~/lib/postgres";
import * as yup from "yup";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const schema = yup.object().shape({
  email: yup.string().email().required().lowercase(),
  hash_password: yup.string().required().min(6),
});

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
              {
                email: userExists[0].email,
                isAdmin: userExists[0].is_admin,
              },
              process.env.ACCESS_TOKEN_SECRET
            );
            const accessCookie = cookie.serialize("token", jsonToken, {
              httpOnly: true,
              maxAge: 60 * 60 * 24,
            });
            res.setHeader("Set-Cookie", accessCookie);
            return res.status(200).send({
              token: jsonToken,
              email: schemaValid.email,
              is_admin: userExists[0].is_admin,
            });
          } else {
            return res
              .status(400)
              .json({ message: "Invalid email or password" });
          }
        } catch (error) {
          res.status(500).json({ errorMessage: error });
        }
      } else {
        return res.status(400).send({ message: "Invalid email or password" });
      }
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  }
};

export default handler;
