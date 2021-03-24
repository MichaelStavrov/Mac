import { useField } from 'formik'
import React from 'react';

// @ts-ignore
export function InputText({ label, ...props }) {
  // @ts-ignore
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
}
