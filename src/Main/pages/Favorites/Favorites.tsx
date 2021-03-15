import React from "react";
import { useSelector } from "react-redux";
import s from "./favorites.module.css";
import { IRootState } from "../../../store";
import { ItemFavorite } from "./ItemFavorite/ItemFavorite";

export function Favorites() {
  const favoriteMacs = useSelector((state: IRootState) => state.macs.favorites);


  
  return (
    <section className={s.favorites}>
      {favoriteMacs.length === 0 && (
        <p className={s.noMoreFavorites}>No more favorites</p>
      )}
      <ul className={s.favoritesList}>
        {favoriteMacs.map(mac => 
          <ItemFavorite mac={mac}/>
        )}
      </ul>
    </section>
  );
}
