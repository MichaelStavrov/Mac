import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./product.module.css";
import { IMacFamily } from "../../../../../types/macs";
import {
  ProductColorStatus,
  ProductStatus,
} from "../../../../../types/productStatus";
import { IReleaseDateInfo } from "../utils/releasesDateInfo";
import { getProductBuyStatus } from "../utils/getStatus";
import { imgs } from "../../../../../img/images";
import { ReactComponent as IconFavorite } from "../../../../../img/favorite/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  IRootState,
  removeFavorite,
} from "../../../../../store";

type ProductPops = {
  arrayDatesWithDiff: IReleaseDateInfo[];
  status: ProductStatus;
  macFamily: IMacFamily;
};

export const Product = ({
  arrayDatesWithDiff,
  status,
  macFamily,
}: ProductPops) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: IRootState) => state.macs.favorites);

  const background =
    arrayDatesWithDiff.length > 0
      ? ProductColorStatus[status]
      : ProductColorStatus[ProductStatus.neutral];

  function handleFavoritesClick() {
    dispatch(addToFavorites(macFamily));
    if (favorites.includes(macFamily)) {
      dispatch(removeFavorite(macFamily));
    }
  }

  return (
    <section className={s.product}>
      <IconFavorite
        className={cn({
          [s.iconHeart]: true,
          [s.iconHeartFilled]: favorites.includes(macFamily),
        })}
        onClick={handleFavoritesClick}
      />
      <div className={s.productImage}>
        <Link to={`/product/${macFamily}`}>
          <img src={imgs[macFamily]} className={s.image} alt={macFamily} />
        </Link>
      </div>
      <div className={s.productInfo}>
        <Link to={`/product/${macFamily}`} className={s.title}>
          {macFamily}
        </Link>
        <div className={s.status}>
          <div
            className={s.productBuyStatus}
            style={
              arrayDatesWithDiff.length > 0
                ? { background }
                : { background, borderRadius: "4px" }
            }
          >
            {getProductBuyStatus(status)}
          </div>
          {arrayDatesWithDiff.length > 0 && (
            <div
              className={s.statusCell}
              style={{ border: `1px solid ${background}` }}
            >
              {status}
            </div>
          )}
        </div>
        <p className={s.descripton}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          pariatur iusto ipsa nobis consequuntur repellat, libero, voluptatem,
          hic quisquam quibusdam numquam delectus. Laudantium non quo maiores
          fuga et, obcaecati similique?
        </p>
        <Link to={`/product/${macFamily}`} className={s.linkMore}>
          {macFamily} Roundup
        </Link>
      </div>
    </section>
  );
};
