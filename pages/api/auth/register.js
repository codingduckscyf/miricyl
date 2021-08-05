import bcrypt from "bcrypt";
import sql from "~/lib/postgres";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  hash_password: yup.string().required(),
});

const handler = async ({ method, body: { email, password } }, res) => {
  if (method === "POST") {
    const user = {
      email: email,
      hash_password: await bcrypt.hash(password, 10),
      is_admin: false,
    };
    const valid = await schema.isValid(user);
    if (valid) {
      const userExists = await sql`SELECT * FROM users WHERE email=${email}`;
      if (userExists.count > 0) {
        return res
          .status(400)
          .json({ message: "There is already an account with this email" });
      } else {
        const [newUser] = await sql`INSERT INTO users ${sql(
          user,
          ...Object.keys(user)
        )} RETURNING *;`;
        return res.json({ users: newUser });
      }
    } else {
      return res.status(400).json({ message: "Not valid data" });
    }
  }
};
export default handler;
