import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";
import iconLogo from "../img/logo/macrumors-simple-logo-light.svg";
import iconInst from '../img/socials/icon-instagram.svg'
import iconFacebook from '../img/socials/icon-facebook.svg'
import iconTwitter from '../img/socials/icon-twitter.svg'
import iconYoutube from '../img/socials/icon-youtube.svg'
import iconNotification from '../img/socials/icon-notification.svg'
import iconWifi from '../img/socials/icon-wifi.svg'
import iconMessage from '../img/socials/icon-message.svg'

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.wrapHeader}>
          <Link to="/">
            <img src={iconLogo} className={s.iconLogo} alt="logo" />
          </Link>
          <div className={s.socials}>
              <img src={iconInst} className={s.iconSocial} alt='icon-instagram'/>
              <img src={iconFacebook} className={s.iconSocial} alt='icon-facebook'/>
              <img src={iconTwitter} className={s.iconSocial} alt='icon-twitter'/>
              <img src={iconYoutube} className={s.iconSocial} alt='icon-youtube'/>
              <img src={iconNotification} className={s.iconSocial} alt='icon-notification'/>
              <img src={iconWifi} className={s.iconSocial} alt='icon-wifi'/>
              <img src={iconMessage} className={s.iconSocial} alt='icon-message'/>
            </div>
        </div>
      </div>
      <nav className={s.wrapperNav}>
        <div className={s.wrapper}>
          <div className={s.navigation}>
            <Link to="/guide" className={s.link}>
              <div>Releases</div>
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
