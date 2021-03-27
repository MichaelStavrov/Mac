import React from 'react';
import { useField } from 'formik';
import s from './inputText.module.css'


type InputTextProps = {
  [key in string]: string

}


export function InputText({ label, ...props }: InputTextProps) {

  // @ts-ignore
  const [field, meta] = useField(props);
 

  return (
    <React.Fragment>
      {meta.touched && meta.error && (
        <div className={s.error}>{meta.error}</div>
      )}
      <label htmlFor={props.id || props.name}>
        <input className={s.input} {...field} {...props} />
      </label>
    </React.Fragment>
  );
}
