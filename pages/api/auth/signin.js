import bcrypt from "bcrypt";
import sql from "~/lib/postgres";
import * as yup from "yup";
import jwt from "jsonwebtoken";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  hash_password: yup.string().required(),
});

const handler = async ({ method, body: { email, password } }, res) => {
  if (method === "POST") {
    const user = {
      email: email,
      hash_password: password,
    };
    const schemaValid = await schema.isValid(user);
    if (schemaValid) {
      const userExists = await sql`SELECT * FROM users WHERE email=${email}`;
      if (userExists.count > 0) {
        try {
          const userValid = await bcrypt.compare(
            password,
            userExists[0].hash_password
          );
          if (userValid) {
            return res.status(200).json({ message: "Success" });
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
