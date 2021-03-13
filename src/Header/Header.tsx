import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.css";
import iconLogo from "../img/logo/macrumors-simple-logo-light.svg";
import iconInst from '../img/socials/instagram.png'
import iconFacebook from '../img/socials/facebook.png'
import iconTwitter from '../img/socials/twitter.png'
import iconYoutube from '../img/socials/youtube.png'
import iconNotification from '../img/socials/notification.png'
import iconWifi from '../img/socials/wifi.png'
import iconMessage from '../img/socials/message.png'

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
              <div>Buyer's Guide</div>
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
