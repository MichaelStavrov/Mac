import React from "react";
import s from "./footer.module.css";
import iconLogo from "../img/logo/macrumors-simple-logo-light.svg";
import iconInst from "../img/socials/instagram.png";
import iconFacebook from "../img/socials/facebook.png";
import iconTwitter from "../img/socials/twitter.png";
import iconYoutube from "../img/socials/youtube.png";
import iconNotification from "../img/socials/notification.png";
import iconWifi from "../img/socials/wifi.png";
import iconMessage from "../img/socials/message.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.wrapFooter}>
          <Link to="/">
            <img src={iconLogo} className={s.iconLogo} alt="logo" />
          </Link>
          <small className={s.copyright}>Copyright © 2000-2021 MacRumors.com, LLC. </small>
          <div className={s.socials}>
            <img src={iconInst} className={s.iconSocial} alt="icon-instagram" />
            <img
              src={iconFacebook}
              className={s.iconSocial}
              alt="icon-facebook"
            />
            <img
              src={iconTwitter}
              className={s.iconSocial}
              alt="icon-twitter"
            />
            <img
              src={iconYoutube}
              className={s.iconSocial}
              alt="icon-youtube"
            />
            <img
              src={iconNotification}
              className={s.iconSocial}
              alt="icon-notification"
            />
            <img src={iconWifi} className={s.iconSocial} alt="icon-wifi" />
            <img
              src={iconMessage}
              className={s.iconSocial}
              alt="icon-message"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
