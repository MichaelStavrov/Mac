import React from "react";
import { Link } from "react-router-dom";
import s from "./product.module.css";
import { IMacFamily } from "../../../../types/macs";


//--------
import { ProductColorStatus } from "../../../../types/productStatus"
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { getStatus, getTitleStatus, getStatusCell } from "../utils/getStatus"


const description="The MacBook Air was updated on November 10, 2020, with a new M1 chip from Apple, integrating the CPU and graphics with a Neural Engine for machine learning capabilities all on a single chip."

type ProductProps = {
  macFamily: IMacFamily
  img: string
  dates: Date[]
}

export const Product = ({ macFamily, img, dates }: ProductProps) => {

  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);    
  const { max } = getDatesMeta(arrayDatesWithDiff);

  const status = getStatus(daysSinceLastRelease, max);
  const background = arrayDatesWithDiff.length > 0 ? ProductColorStatus[status] : '#ffc125';
  
  return (
    <section className={s.product}>
        <div className={s.productImage}>
          <img src={img} className={s.image} alt={"icon-mac"}/>
        </div>
        <div className={s.productInfo}>
          <Link to="/" className={s.title}>{macFamily}</Link>
          <div className={s.status} style={{border: `1px solid ${background}`}} >
            <div className={s.productBuyStatus} style={{background}} >
              {
                arrayDatesWithDiff.length > 0 ?
                getTitleStatus(status)
                : "Neutral"
              }
            </div>
            {arrayDatesWithDiff.length > 0 && 
              <div className={s.statusCell}>
                {getStatusCell(status)}
                {/* {
                arrayDatesWithDiff.length > 0 ?
                getStatusCell(status)
                : "Mid-product Cycle"
                } */}
              </div>
            }
          </div>
          <p className={s.descripton}>{description}</p>
          <Link to="/" className={s.linkMore}>{macFamily} Roundup</Link>
        </div>
      </section>
  )
}