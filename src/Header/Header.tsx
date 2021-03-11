import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";
import iconLogo from "../img/logo/macrumors-simple-logo-light.svg";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
         <img src={iconLogo} className={s.iconLogo} alt="logo" />
      </div>
      <nav className={s.wrapperNav}>
        <div className={s.wrapper}>
          <div className={s.navigation}>
            <Link to="/guide" className={s.link}>
              <div>Mac Releases</div>
            </Link>
            <Link to="/byYear" className={s.link}>
              <div>Macs by year</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
