import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./header.module.css";
import iconLogo from "../../img/logo/macrumors-simple-logo-light.svg";
import { ReactComponent as IconFavorite } from "../../img/favorite/heart.svg";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { socialIcons } from "../../img/socials/socialIcons";
import { IPositions } from "../../types/coordinates";

export function Header() {
  const countFavorites = useSelector(
    (state: IRootState) => state.macs.favorites
  );
  const [visible, setVisible] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }: IPositions) => {
      const isShow = currPos.y < prevPos.y && window.scrollY > 100;
      if (isShow !== visible) {
        setVisible(isShow);
      }
    },
    [visible]
  );

  return (
    <header
      className={cn({
        [s.header]: true,
        [s.hidden]: visible,
      })}
    >
      <div className={s.wrapper}>
        <div className={s.wrapHeader}>
          <Link to="/">
            <img src={iconLogo} className={s.iconLogo} alt="logo" />
          </Link>
          <div className={s.socials}>
            <div className={s.wrapIconFavorites}>
              <Link to="/favorites" className={s.linkFavorites}>
                <IconFavorite
                  className={cn({
                    [s.iconHeart]: true,
                    [s.iconHeartFilled]: countFavorites.length > 0,
                  })}
                />
                {countFavorites.length > 0 && (
                  <span className={s.countFavorites}>
                    {countFavorites.length}
                  </span>
                )}
              </Link>
            </div>

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
      </div>
      <nav className={s.wrapperNav}>
        <div className={s.wrapper}>
          <div className={s.navigation}>
            <Link to="/guide" className={s.itemNav}>
              <div>Buyer's Guide</div>
            </Link>
            <Link to="/byYear" className={s.itemNav}>
              <div>Macs by year</div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
