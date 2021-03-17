import { IMacFamily } from "../../../../types/macs";
import s from "./itemFavorite.module.css";
import { imgs } from "../../../../img/images";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../../store";

type ItemFavoriteProps = {
  mac: IMacFamily;
};

export function ItemFavorite({ mac }: ItemFavoriteProps) {
  const dispatch = useDispatch();
  
  function handleRemoveFavoriteClick() {
    dispatch(removeFavorite(mac));
  }
  return (
    <li className={s.favoritesItem} key={mac}>
      <div className={s.name}>{mac}</div>
      <div className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        possimus!
      </div>
      <div className={s.wrapIcon}>
        <img src={imgs[mac]} className={s.icon} alt={mac} />
      </div>
      <div
        className={s.close}
        onClick={handleRemoveFavoriteClick}
      >
        <div className={s.stripClose1}></div>
        <div className={s.stripClose2}></div>
      </div>
    </li>
  );
}
