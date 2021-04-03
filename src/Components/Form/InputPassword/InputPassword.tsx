import React, { useState } from 'react';
import cn from 'classnames'
import { useField } from 'formik';
import s from './inputPassword.module.css'
import {ReactComponent as HidePassword} from '../../../img/form/hide-password.svg'

type InputTextProps = {
  type: string
  placeholder: string
  name: string
  label: string
  id?: string
}

export function InputPassword({ label, ...props }: InputTextProps) {
  const [field, {error, touched}] = useField(props);  
  const [showHidePassword, setShowHidePassword] = useState(false)

  return (
    <React.Fragment>
      {touched && error && (
        <div className={s.error}>{error}</div>
      )}
      <label className={s.label} htmlFor={props.id || props.name}>
          <HidePassword 
            className={cn({
              [s.iconHidePassword]: true,
              [s.iconHidePasswordActive]: showHidePassword
            })}
            onClick={() => setShowHidePassword(prev => !prev)}
          />
        <input className={cn({
          [s.input]: true,
          [s.inputError]: error && touched
        })} {...field} {...props} type={showHidePassword ? 'text' : 'password'} />
      </label>
    </React.Fragment>
  );
}
