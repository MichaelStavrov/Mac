import { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./favorites.module.css";
import { IRootState } from "../../../store";
import { ItemFavorite } from "./ItemFavorite/ItemFavorite";

export function useScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
}

export function Favorites() {
  useScrollToTop();

  const favoriteMacs = useSelector((state: IRootState) => state.macs.favorites);
  
  return (
    <section className={s.favorites}>
      {favoriteMacs.length === 0 && (
        <p className={s.noMoreFavorites}>No more favorites</p>
      )}
      <ul className={s.favoritesList}>
        {favoriteMacs.map(mac => 
          <ItemFavorite mac={mac} key={mac}/>
        )}
      </ul>
    </section>
  );
}
