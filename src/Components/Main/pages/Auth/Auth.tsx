import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./auth.module.css";
import { InputText } from "../../../Form/InputText";

export function Auth() {
  return (
    <div className={s.auth}>
      <div className={s.logIn}>Log in</div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <InputText
            label="First Name"
            name="firstName"
            type="text"
            placeholder="firstName"
          />

          <InputText
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="lastName"
          />

          <InputText
            label="Email"
            name="email"
            type="text"
            placeholder="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
