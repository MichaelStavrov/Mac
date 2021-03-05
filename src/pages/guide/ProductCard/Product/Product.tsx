import React from "react";
import { Link } from "react-router-dom";
import s from "./product.module.css";
import { IMacFamily } from "../../../../types/macs";

//--------
import { ProductColorStatus, ProductStatus } from "../../../../types/productStatus";
import { releasesDateInfo } from "../utils/releasesDateInfo";
import { getDatesMeta } from "../utils/getDatesMeta";
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease";
import { getStatus, getProductBuyStatus } from "../utils/getStatus";
import { imgs } from "../../utils/getImg";

const description =
  "The MacBook Air was updated on November 10, 2020, with a new M1 chip from Apple, integrating the CPU and graphics with a Neural Engine for machine learning capabilities all on a single chip.";

type ProductProps = {
  macFamily: IMacFamily;
  dates: Date[];
};

export const Product = ({ macFamily, dates }: ProductProps) => {
  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);
  const { max } = getDatesMeta(arrayDatesWithDiff);
  const { neutral } = ProductStatus;
  const status =
    arrayDatesWithDiff.length > 0
      ? getStatus(daysSinceLastRelease, max)
      : neutral;
  const background =
    arrayDatesWithDiff.length > 0
      ? ProductColorStatus[status]
      : ProductColorStatus[neutral];

  return (
    <section className={s.product}>
      <div className={s.productImage}>
        <img src={imgs[macFamily]} className={s.image} alt={macFamily} />
      </div>
      <div className={s.productInfo}>
        <Link to="/" className={s.title}>{macFamily}</Link>
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
        <p className={s.descripton}>{description}</p>
        <Link to="/" className={s.linkMore}>{macFamily} Roundup</Link>
      </div>
    </section>
  );
};
