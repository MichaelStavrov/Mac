import React from "react";
import { useSelector } from "react-redux";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";
import { Releases } from "./Releases/Releases";
import { IMacFamily, IMacModelId, IMacModelDict } from "../../../types/macs";
import { macsArrayToDict } from "../utils/macsArrayToDict"
import { getMacFamilyIds } from "../utils/getMacFamilyIds"
import { getDates } from "../utils/getDates"
import { IRootState } from "../../../store";
import { ProductStatus } from "../../../types/productStatus";
import { getDatesMeta } from "./utils/getDatesMeta";
import { getDaysSinceLastRelease } from "./utils/getDaysSinceLastRelease";
import { getStatus } from "./utils/getStatus";
import { releasesDateInfo } from "./utils/releasesDateInfo";

type ProductCardProps = {
  macFamily: IMacFamily
}

export const ProductCard = ({ macFamily }: ProductCardProps) => {  
  const macs = useSelector((state: IRootState) => state.macs.entities);
  
  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);
  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);
  const { max } = getDatesMeta(arrayDatesWithDiff);
  const status = arrayDatesWithDiff.length > 0 ? getStatus(daysSinceLastRelease, max) : ProductStatus.neutral;
  

  return (
    <section className={s.productCard}>
      <Product macFamily={macFamily} dates={dates} status={status}/>
      <Releases dates={dates} status={status}/>
    </section>
      
  )
}