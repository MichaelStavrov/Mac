
import s from "./auth.module.css";
import React, { useState } from "react";
import { LogIn } from "../../../Form/LogIn/LogIn";
import { SignUp } from "../../../Form/SignUp/SignUp";

export function Auth() {
  const [auth, setAuth] = useState("logIn");

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const auth = e.currentTarget.name;
    setAuth(auth);
  }

  return (
    <div className={s.auth}>
      <div className={s.title}>
        <button
          type="button"
          className={s.buttonLogIn}
          name="logIn"
          onClick={(e) => handleClick(e)}
        >
          <span className={s.buttonContent}>Log in</span>
        </button>
        <span className={s.or}>or</span>
        <button
          type="button"
          className={s.buttonSignUp}
          name="signUp"
          onClick={(e) => handleClick(e)}
        >
          Sign up
          </button>
      </div>
      {auth === 'logIn' &&
        <div className={s.wrapLogInOrSignUp}>
          <LogIn/>
          <button
            type="button"
            className={s.buttonToSignUp}
            name="signUp"
            onClick={(e) => handleClick(e)}
          >
            Sign up
          </button>
        </div>
 
      }
      {auth === 'signUp' &&
        <div className={s.wrapLogInOrSignUp}>
          <SignUp/>     
          <button
            type="button"
            className={s.buttonToSignUp}
            name="logIn"
            onClick={(e) => handleClick(e)}
          >
            Log in
          </button>
        </div>
      

      }
     

    </div>
  );
}
