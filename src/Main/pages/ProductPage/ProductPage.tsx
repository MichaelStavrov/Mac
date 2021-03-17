import { useEffect } from "react";
import s from "./productPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, IRootState, removeFavorite } from "../../../store";
import { imgs } from "../../../img/images";
import { ReactComponent as IconFavorite } from "../../../img/favorite/heart.svg";
import { ReactComponent as IconFavoriteFilled } from "../../../img/favorite/heartFill.svg";

export function ProductPage() {
  const mac = useSelector((state: IRootState) => state.macs.macFamily);
  const favorites = useSelector((state: IRootState) => state.macs.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleFavoritesClick() {
    dispatch(addToFavorites(mac));
    if (favorites.includes(mac)) {
      dispatch(removeFavorite(mac));
    }
  }

  return (
    <div className={s.productPage}>
      <div className={s.header}>
        <div className={s.description}>
          <div>
            <h3 className={s.name}>{mac}</h3>
            {favorites.includes(mac) ? (
              <IconFavoriteFilled
                className={s.iconHeart}
                onClick={handleFavoritesClick}
              />
            ) : (
              <IconFavorite
                className={s.iconHeart}
                onClick={handleFavoritesClick}
              />
            )}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            enim consequuntur rem ducimus, officia itaque consequatur dolores
            expedita deserunt facere!
          </p>
        </div>
        <div className={s.image}>
          <img src={imgs[mac]} alt={mac} />
        </div>
      </div>
    </div>
  );
}
