import React from 'react'
import {  useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import s from './byYear.module.css'
import { macsModelSortByYear } from './utils/macsModelSortByYear'
import img from '../../../img/imac_300.png'
import { Link } from 'react-router-dom';
import { imgsMacsByYear } from '../../../img/images'

export function ByYear() {
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macsByYear = macsModelSortByYear(macs);

  return (
    <div className={s.wrapper}>
      <p>Select the year of interest for complete specs on all Macs released that year.<br/> Note that the images merely represent one of the more notable Macs released in a given year.<br/> Many other models also were introduced.</p>
      <ul className={s.list}>
        {Object.keys(macsByYear).reverse().map(year => 
          <li className={s.item}  key={Math.random()}>
          <Link to={`byYear/${year}`} className={s.link} >
            <img src={imgsMacsByYear['img' + year]} alt={img} className={s.img}/>
            <div className={s.year}>{year}</div>
          </Link>
        </li>
        )
      }
    </ul>
   </div>
  )
}