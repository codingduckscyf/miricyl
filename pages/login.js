import SiteHeader from "~/components/SiteHeader";
import Footer from "~/components/Footer";
import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "./_app";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import Logout from "../components/Buttons/Logout";

const logInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const { storeUser, user } = useContext(UserContext);
  const router = useRouter();

  const signIn = (values) => {
    fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        storeUser(data);
        router.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between align-center bg-gray-300">
      <SiteHeader />
      {user.email ? (
        <div className="flex flex-col">
          <div className="text-center text-xl font-bold p-5">{`You are logged in as: ${user.email}`}</div>
          <Logout link="/" />
        </div>
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={logInSchema}
          onSubmit={(values) => {
            signIn(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col w-1/4 h-2/4 p-12 mx-auto bg-gray-200 justify-center align-center shadow-lg border rounded-md border-none">
              <label className="text-center font-bold text-xl">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Please enter email address"
                className="border rounded-sm border-none"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label className="text-center font-bold text-xl">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Please enter password"
                className="border rounded-sm border-none"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button
                type="submit"
                className="w-2/4 m-3 self-center border rounded-md border-none bg-indigo-500 text-white px-2 py-1"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      )}
      <Footer />
    </div>
  );
};

export default Login;
