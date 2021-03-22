import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import s from "auth.module.css";

// @ts-ignore
const MyTextInput = ({ label, ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export function Auth() {
  
 
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <MyTextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="firstName"
        />

        <MyTextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="lastName"
        />

        <MyTextInput
          label="Email"
          name="email"
          type="text"
          placeholder="email"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
