import React from 'react';
import { useSelector } from 'react-redux';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import {IRootState} from "../../store";

import iconMacbook from '../../img/tabBar/icon-13macbook.png'
import iconIPhone from '../../img/tabBar/icon-iphone.png'
import iconMusic from '../../img/tabBar/icon-music.png'
import iconWatch from '../../img/tabBar/icon-watch.png'

export const Guide = () => {
  const status = useSelector((state: IRootState) => state.macs.loading);


  if (["loading", "idle"].includes(status)) {
    return <div>Loading</div>;
  }

  return (
    <section className={s.guide}>
      <ul className={s.tabBar}>
        <li className={s.item}>
          <img src={iconIPhone} className={s.image} alt='icon-iphone'/>
          IPhone/IPad
        </li>
        <li className={s.item} >
        <img src={iconMacbook} className={s.image} alt='icon-macbook'/>
          Macs
        </li>
        <li className={s.item} >
        <img src={iconMusic} className={s.image} alt='icon-music'/>
          Music
        </li>
        <li className={s.item} >
        <img src={iconWatch} className={s.image} alt='icon-watch'/>
          Watch/Other
        </li>
      </ul>
      <ListOfDevices />
      <ProductCard />
    </section>
  )
}