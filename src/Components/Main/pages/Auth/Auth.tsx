import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./auth.module.css";
import { InputText } from "../../../Form/InputText";

export function Auth() {

  return (
    <div className={s.auth}>
      <div className={s.title}>
        <button type='button' className={s.buttonLogIn}>
          <span className={s.buttonContent}>Log in</span>
        </button>
        <span className={s.or}>or</span>
        <button type='button' className={s.buttonSignUp}>Sign up</button>
      </div>
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
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form  className={s.form}>
          <InputText
            label="email"
            name="email"
            type="text"
            placeholder="Email"
          />

          <InputText
            label="password"
            name="password"
            type="text"
            placeholder="Password"
          />
          <button type='submit' className={s.buttonSubmit}>Log in</button>
        </Form>
      </Formik>
    </div>
  );
}

