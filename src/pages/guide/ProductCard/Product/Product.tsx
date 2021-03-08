import React from "react";
import { Link } from "react-router-dom";
import s from "./product.module.css";
import { IMacModelDict, IMacModelId } from "../../../../types/macs";
import { ProductColorStatus, ProductStatus } from "../../../../types/productStatus";
import { releasesDateInfo } from "../utils/releasesDateInfo";
import { getProductBuyStatus } from "../utils/getStatus";
import { imgs } from "../../utils/getImg";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store";
import { getDates } from "../../utils/getDates";
import { getMacFamilyIds } from "../../utils/getMacFamilyIds";
import { macsArrayToDict } from "../../utils/macsArrayToDict";

const description =
  "The MacBook Air was updated on November 10, 2020, with a new M1 chip from Apple, integrating the CPU and graphics with a Neural Engine for machine learning capabilities all on a single chip.";


export const Product = () => {
  const status = useSelector((state: IRootState) => state.macs.status);
  const macFamily = useSelector((state: IRootState) => state.macs.macFamily);
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);
  const arrayDatesWithDiff = releasesDateInfo(dates);
  const background = arrayDatesWithDiff.length > 0 ? ProductColorStatus[status] : ProductColorStatus[ProductStatus.neutral];


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
