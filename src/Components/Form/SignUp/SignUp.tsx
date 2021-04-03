import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./signUp.module.css";

import { InputText } from "../../Form//InputText/InputText";
import { InputPassword } from "../InputPassword/InputPassword";

export function SignUp() {
  return (
    <Formik
      initialValues={{ name: "", password: "", email: "", passwordConfirmation: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(16, "Must be 16 characters or less")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be 8 characters or more")
          .max(16, "Must be 16 characters or less")
          .required("Required"),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
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
          label="name" 
          name="name" 
          type="text" 
          placeholder="Name" 
        />
        <InputText 
          label="email" 
          name="email" 
          type="text" 
          placeholder="Email" 
        />
        <InputPassword
          label="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <InputPassword
          label="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation password"
        />
        <button type="submit" className={s.buttonSubmit}>
          Sign up
        </button>
      </Form>
    </Formik>
  );
}
