import React from 'react'
import s from './productPage.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { imgs } from '../../img/images'

export function ProductPage() {
  const mac = useSelector((state: IRootState) => state.macs.macFamily)

  return (
    <div className={s.productPage}>
      <div className={s.header}>
        <div className={s.description}>
          <h3 className={s.name}>{mac}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim consequuntur rem ducimus, officia itaque consequatur dolores expedita deserunt facere!</p>
        </div>
        <div className={s.image}>
          <img src={imgs[mac]} alt={mac}/>
        </div>
      </div>
    </div>
  )
}