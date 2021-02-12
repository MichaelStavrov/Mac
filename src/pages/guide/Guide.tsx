import React, { useState } from 'react';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import macs from "../../macs.json"
import { macsArrayToDict, getMacFamilyIds, IMacFamily, IMacModelId, IMacModelDict } from "../../types/macs"
import { getImg, imgs } from "./ListOfDevices/utils/getImg"


export const Guide: React.FC = () => {
  const [macFamily, setMacFamily] = useState<IMacFamily>("MacBook Air")

  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  // console.log(macs.find(mac => mac.model === "A1932 (EMC 3184)"));

  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);


  function getDates(macModelIds: IMacModelId[], macModelDict: IMacModelDict): Date[] {
    const dates: string[] = [];
    for (const model of macModelIds) {
      if (model in macModelDict) {
        if (!dates.includes(macModelDict[model].intro)) {
          dates.push(macModelDict[model].intro);
        }
      }
    }
    // for (const mac of macs) {
    //   if (mac.titles[0].includes(MAC_FAMILIES[0])) {
    //     if (!dates.includes(mac.intro)) {
    //       dates.push(mac.intro);
    //     }     
    //   }
    // }
    return dates.map(date => new Date(date)).sort((a, b) => +b - +a);
  }

  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);

  const img = getImg(imgs, macFamily)

  return (
    <section className={s.guid}>
      <h1>Byeyer's Guide</h1>
      <ListOfDevices onChangeFamily={setMacFamily} />
      <ProductCard dates={dates} macFamily={macFamily} img={img} />
    </section>
  )
}