import s from "./footer.module.css";
import iconLogo from "../../img/logo/macrumors-simple-logo-light.svg";
import { Link } from "react-router-dom";
import { socialIcons } from "../../img/socials/socialIcons";
import { useState, useEffect } from "react";
import { MAC_FAMILIES } from "../../types/macs";
import { imgs } from "../../img/images";
import cn from "classnames";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <Link to="/">
          <img src={iconLogo} className={s.iconLogo} alt="logo" />
        </Link>
        <small className={s.copyright}>
          Copyright © 2000-2021 MacRumors.com, LLC.{" "}
        </small>
        <div className={s.socials}>
          {socialIcons.map((icon) => (
            <img
              src={icon}
              className={s.iconSocial}
              alt="icon-social"
              key={icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
