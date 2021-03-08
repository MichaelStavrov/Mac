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

type ProductCardProps = {
  macFamily: IMacFamily
}

export const ProductCard = ({ macFamily }: ProductCardProps) => {  
  const macs = useSelector((state: IRootState) => state.macs.entities);
  
  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);

 
  

  return (
    <section className={s.productCard}>
      <Product macFamily={macFamily} dates={dates}/>
      <Releases dates={dates}/>
    </section>
      
  )
}