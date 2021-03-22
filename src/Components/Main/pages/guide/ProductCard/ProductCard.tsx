import React from "react";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";
import { Releases } from "./Releases/Releases";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../store";
import { getDates } from "../../utils/getDates";
import { getMacFamilyIds } from "../../utils/getMacFamilyIds";
import { macsArrayToDict } from "../../utils/macsArrayToDict";
import { releasesDateInfo } from "../../utils/releasesDateInfo";

export const ProductCard = () => {  
  const {status, macFamily, entities: macs } = useSelector((state: IRootState) => state.macs);
  const macModelDict = macsArrayToDict(macs);
  const macModelIds = getMacFamilyIds(macModelDict, macFamily);  
  const dates = getDates(macModelIds, macModelDict).slice(0, 7);
  const arrayDatesWithDiff = releasesDateInfo(dates);
  
  return (
    <section className={s.productCard}>
      <Product arrayDatesWithDiff={arrayDatesWithDiff} status={status} macFamily={macFamily}/>
      <Releases status={status} dates={dates}/>
    </section>
      
  )
}