import React from "react";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";
import { Releases } from "./Releases/Releases";
import { IMacFamily } from "../../../types/macs";



type ProductCardProps = {
  dates: Date[]
  macFamily: IMacFamily
}

export const ProductCard = ({ dates, macFamily}: ProductCardProps) => {

  return (
    <section className={s.productCard}>
      <Product macFamily={macFamily} dates={dates}/>
      <Releases dates={dates}/>
    </section>
      
  )
}