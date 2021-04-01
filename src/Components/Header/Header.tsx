import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./header.module.css";
import iconLogo from "../../img/logo/macrumors-simple-logo-light.svg";
import { ReactComponent as IconFavorite } from "../../img/favorite/heart.svg";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import React, { useEffect, useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { socialIcons } from "../../img/socials/socialIcons";
import IconAuth from "../../img/auth/auth.svg";
import { IPositions } from "../../types/coordinates";

const sections = [
  { title: "Buyer's Guide", path: "guide" },
  { title: "Macs by year", path: "byYear" },

];

export function Header() {
  const countFavorites = useSelector(
    (state: IRootState) => state.macs.favorites
  );
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive((prev) => !prev);
  }

  useScrollPosition(
    ({ prevPos, currPos }: IPositions) => {
      const isShow = currPos.y < prevPos.y && window.scrollY > 100;
      if (isShow !== visible) {
        setVisible(isShow);
      }
    },
    [visible]
  );

  const main = document.querySelector("main");

  useEffect(() => {
    if (main) {
      main.style.filter = isActive ? "blur(2px)" : "blur(0)";
      main.addEventListener("click", () => {
        setIsActive(false);
      });
    }
  }, [isActive, main]);

  return (
    <React.Fragment>
      <header
        className={cn({
          [s.header]: true,
          [s.hidden]: visible,
        })}
      >
        <div
          className={cn({
            [s.menu]: true,
            [s.menuActive]: isActive,
          })}
        >
          <button
            className={cn({
              [s.burgerMenu]: true,
              [s.burgerMenuActive]: isActive,
            })}
            type="button"
            onClick={handleMenuClick}
          >
            <div
              className={cn({
                [s.top]: true,
                [s.topActive]: isActive,
              })}
            />
            <div
              className={cn({
                [s.middle]: true,
                [s.middleActive]: isActive,
              })}
            />
            <div
              className={cn({
                [s.down]: true,
                [s.downActive]: isActive,
              })}
            />
          </button>
          {isActive && (
            <ul className={s.burgerNavigation}>
              {sections.map((section) => (
                <Link
                  to={`/${section.path}`}
                  className={s.itemNav}
                  onClick={() => setIsActive(false)}
                  key={section.title}
                >
                  <li className={s.sectionTitle}>{section.title}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className={s.wrapper}>
          <div className={s.wrapHeader}>
            {!isActive && (
              <button
                className={cn({
                  [s.burgerMenu]: true,
                })}
                type="button"
                onClick={handleMenuClick}
              >
                <div className={s.top} />
                <div className={s.middle} />
                <div className={s.down} />
              </button>
            )}

            <Link to="/">
              <img src={iconLogo} className={s.iconLogo} alt="logo" />
            </Link>
            <div className={s.socials}>
              <div className={s.wrapIconFavorites}>
                <Link className={s.wrapIconAuth} to="/auth">
                  <img className={s.iconAuth} src={IconAuth} alt="auth" />
                </Link>
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
            <ul className={s.navigation}>
              {sections.map((section) => (
                <Link
                  to={`/${section.path}`}
                  onClick={() => setIsActive(false)}
                  key={section.title}
                >
                  <li className={s.sectionTitle}>{section.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
