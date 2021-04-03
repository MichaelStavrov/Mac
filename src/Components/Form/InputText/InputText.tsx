import React, { useState } from 'react';
import cn from 'classnames'
import { useField } from 'formik';
import s from './inputText.module.css'

type InputTextProps = {
  type: string
  placeholder: string
  name: string
  label: string
  id?: string
}

export function InputText({ label, ...props }: InputTextProps) {
  const [field, {error, touched}] = useField(props); 

  return (
    <React.Fragment>
      {touched && error && (
        <div className={s.error}>{error}</div>
      )}
      <label className={s.label} htmlFor={props.id || props.name}>
        <input className={cn({
          [s.input]: true,
          [s.inputError]: error && touched
        })} {...field} {...props} />
      </label>
    </React.Fragment>
  );
}
