import React, { useState } from 'react';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import macs from "../../macs.json"
import { macsArrayToDict, getMacFamilyIds, IMacFamily, IMacModelId, IMacModelDict } from "../../types/macs"
import { getImg, imgs } from "./utils/getImg"
import { getDates } from "./utils/getDates"

export const Guide: React.FC = () => {
  const [macFamily, setMacFamily] = useState<IMacFamily>("MacBook Air")

  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  // console.log(macs.find(mac => mac.model === "A1932 (EMC 3184)"));
  // console.log(macModelDict);
  

  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);  
  const img = getImg(imgs, macFamily)

  return (
    <section className={s.guide}>
      <h1>Byeyer's Guide</h1>
      <ListOfDevices onChangeFamily={setMacFamily} />
      <ProductCard dates={dates} macFamily={macFamily} img={img} />
    </section>
  )
}