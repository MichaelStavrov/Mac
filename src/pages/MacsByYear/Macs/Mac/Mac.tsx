import React, { useState } from "react";
import cn from 'classnames'
import s from "./mac.module.css";
import imgIMac from "../../../../img/imac_300.png";
import { imgs } from "../../../../img/images"
import { getMonthAndYearOfRelease } from "../../../guide/ProductCard/utils/getMonthAndYearOfRelease";
import { IMacModel } from "../../../../types/macs";

type MacProps = {
  name: string;
  arrayMacsSameYear: IMacModel[]
};

export function Mac({ name, arrayMacsSameYear }: MacProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const macName = name.replace(/&quot;/g, '"');
  const nameForImg = Object.keys(imgs).filter(key => name.includes(key))
  const img = nameForImg.length > 0 ? imgs[nameForImg[nameForImg.length - 1]] : imgIMac
  const param = arrayMacsSameYear.filter((mac: IMacModel) => mac.titles.includes(name));
  const { intro, disc, model, family } = param[0];
  const familyWithQuotes = family.replace(/&quot;/g, '"');
  const dateIntro = getMonthAndYearOfRelease(new Date(intro));
  const dateDisc = disc === 'N/A' ? disc :  getMonthAndYearOfRelease(new Date(disc));
  
  return (
    <React.Fragment>
      <li className={s.item} onClick={() => setVisible(prev => !prev)}>
        <span className={cn(
          {
            [s.arrowRight]: true,
            [s.arrowDown]: visible
          }
        )}></span>
        {macName}
      </li>
      {visible && (
        <div className={s.param}>
          <img src={img} alt={img} className={s.img}/>
          <ul className={s.listParams}>
            <li><span>Intro:</span>{dateIntro}</li>
            <li><span>Disc:</span>{dateDisc}</li>
            <li><span>Model:</span>{model}</li>
            <li><span>Family:</span>{familyWithQuotes}</li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
