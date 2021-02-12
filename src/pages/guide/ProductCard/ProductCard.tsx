import React from "react";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";
import { Releases } from "./Releases/Releases";
import { IMacFamily } from "../../../types/macs";

type ProductCardProps = {
  dates: Date[]
  macFamily: IMacFamily
  img: string
}

export const ProductCard = ({ dates, macFamily, img }: ProductCardProps) => {

  return (
    <section className={s.productCard}>
      <Product macFamily={macFamily} img={img}/>
      <Releases dates={dates}/>
    </section>
      
  )
}