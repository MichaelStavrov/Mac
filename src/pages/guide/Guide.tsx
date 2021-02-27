import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import { macsArrayToDict } from "./utils/macsArrayToDict"
import { getMacFamilyIds } from "./utils/getMacFamilyIds"
import { IMacFamily, IMacModelId, IMacModelDict } from "../../types/macs"

import { getDates } from "./utils/getDates"
import {IRootState} from "../../store";

export const Guide: React.FC = () => {
  const [macFamily, setMacFamily] = useState<IMacFamily>("MacBook Air")
  const status = useSelector((state: IRootState) => state.macs.loading);
  const macs = useSelector((state: IRootState) => state.macs.entities);

  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);  
  


  if (["loading", "idle"].includes(status)) {
    return <div>Loading</div>;
  }

  return (
    <section className={s.guide}>
      <h1>Byeyer's Guide</h1>
      <ListOfDevices 
        onChangeFamily={setMacFamily}/>
      <ProductCard 
        dates={dates}
        macFamily={macFamily}/>
    </section>
  )
}