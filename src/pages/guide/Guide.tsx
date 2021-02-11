import React, { useState } from 'react';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import macs from "../../macs.json"
import { macsArrayToDict, getMacFamilyIds, MAC_FAMILIES, IMacFamily } from "../../types/macs"
import iMac from "../../img/imac_300.png"
import MacBookAir from "../../img/macbook_air_470.png"
import MacBookPro13 from "../../img/macbook_pro_13_350.png"
import MacBookPro16 from "../../img/macbook_pro_16_372.png"


export const Guide: React.FC = () => {
  const [macFamily, setMacFamily] = useState<IMacFamily>("MacBook Air")

  const macModelDict = macsArrayToDict(macs);
// console.log(macs.find(mac => mac.model === "A1932 (EMC 3184)"));

const macModelIds = getMacFamilyIds(macModelDict, macFamily)


function getDates(macModelIds: any, macModelDict: any): Date[] {
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

const dates = getDates(macModelIds, macModelDict).slice(0, 7);

const imgs: string[] = [iMac, MacBookAir, MacBookPro13, MacBookPro16]

function getImg(imgs: string[]): string {
  const img = imgs.find(family => {
    console.log(family);
    
    return family.includes(macFamily.toLowerCase().split('').map(x => x === " " ? "_" : x).join(''))
  })
 
  
  return img!;
}

const img = getImg(imgs)

  return (
    <section className={s.guid}>
      <h1>Byeyer's Guide</h1>
      <ListOfDevices getMacFamilyIds={getMacFamilyIds} setMacFamily={setMacFamily} />
      <ProductCard dates={dates} macFamily={macFamily} img={img} />
    </section>
  )
}