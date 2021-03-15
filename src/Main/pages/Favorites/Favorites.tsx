import React from "react";
import { useSelector } from "react-redux";
import s from "./favorites.module.css";
import { IRootState } from "../../../store";
import { imgs } from "../../../img/images";

export function Favorites() {
  const favoriteMacs = useSelector((state: IRootState) => state.macs.favorites);

  return (
    <section className={s.favorites}>
      {favoriteMacs.length === 0 && (
        <p className={s.noMoreFavorites}>No more favorites</p>
      )}
      <ul className={s.favoritesList}>
        {favoriteMacs.map((mac) => (
          <li className={s.favoritesItem} key={mac} >
            <div className={s.name}>{mac}</div>
            <div className={s.param}></div>
            <img src={imgs[mac]} className={s.icon} alt={mac} />
            
          </li>
        ))}
      </ul>
    </section>
  );
}
