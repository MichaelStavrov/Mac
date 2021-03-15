import React, { useEffect } from "react";
import s from "./productPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, IRootState } from "../../../store";
import { imgs } from "../../../img/images";
import iconFavorite from "../../../img/favorite/heart.svg";

export function ProductPage() {
  const mac = useSelector((state: IRootState) => state.macs.macFamily);
  const dispatch = useDispatch()

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleAddToFavoritesClick() {
    dispatch(addToFavorites(mac))
  }

  return (
    <div className={s.productPage}>
      <img src={iconFavorite} className={s.iconHeart} onClick={handleAddToFavoritesClick} alt="add-favorites" />
      <div className={s.header}>
        <div className={s.description}>
          <h3 className={s.name}>{mac}</h3>
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
