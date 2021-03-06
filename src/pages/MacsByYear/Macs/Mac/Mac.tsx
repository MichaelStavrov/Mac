import React, { useState } from "react";
import cn from 'classnames'
import s from "./mac.module.css";
import img from "../../../../img/imac_300.png";
import { getMonthAndYearOfRelease } from "../../../guide/ProductCard/utils/getMonthAndYearOfRelease";

type MacProps = {
  name: string;
  arrayMacsSameYear: any
};

export function Mac({ name, arrayMacsSameYear }: MacProps) {
  const [visible, setVisible] = useState(false);

  

  const macName = name.replace(/&quot;/g, "");
  const param = arrayMacsSameYear.filter((mac: any) => mac.titles.includes(name));
  const { intro, disc, model, family } = param[0];
  const dateIntro = getMonthAndYearOfRelease(new Date(intro));
  const discDate = disc === 'N/A' ? disc :  getMonthAndYearOfRelease(new Date(disc));
  console.log();
  
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
          <img src={img} className={s.img}/>
          <ul className={s.listParams}>
            <li><span>Intro</span>{dateIntro}</li>
            <li><span>Disc</span>{discDate}</li>
            <li><span>Model</span>{model}</li>
            <li><span>Family</span>{family}</li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
