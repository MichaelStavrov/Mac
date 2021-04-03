import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./logIn.module.css";
import { InputText } from "../../Form//InputText/InputText";
import { InputPassword } from "../InputPassword/InputPassword";

export function LogIn() {

  return (
    <Formik
      initialValues={{ password: "", email: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, "Must be 8 characters or more")
          .max(16, "Must be 16 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setTimeout(() => {
            resetForm();
          }, 500);
        }, 400);
      }}
    >
      <Form className={s.form}>
        <InputText
          label="email" 
          name="email" 
          type="text" 
          placeholder="Email" />
        <InputPassword
          label="password"
          name="password"
          type={"password"} 
          placeholder="Password"
        />
        <button type="submit" className={s.buttonSubmit}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
