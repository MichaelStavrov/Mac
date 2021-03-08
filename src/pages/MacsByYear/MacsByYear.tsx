import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, selectedYear } from '../../store';
import s from './macsByYear.module.css'
import { macsModelSortByYear } from './utils/macsModelSortByYear'
import img from '../../img/imac_300.png'
import { Link } from 'react-router-dom';

export function MacsByYear() {
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const dispatch = useDispatch()
  const macsByYear = macsModelSortByYear(macs);
  
  function handleClick(year: React.SetStateAction<string>) {
    dispatch(selectedYear(year))
  }
  
  
  return (
    <ul className={s.list}>
      {Object.keys(macsByYear).reverse().map(year => 
        <li className={s.item} onClick={() => handleClick(year)} key={Math.random()}>
          <Link to={`byYear/${year}`} className={s.link} >
            <img src={img} alt={img} className={s.img}/>
            <div>{year}</div>
          </Link>
        </li>
      )
    }
   </ul>
  )
}