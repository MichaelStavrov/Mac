import React from "react";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";
import { Releases } from "./Releases/Releases";


export const ProductCard = () => {
  return (
    <section className={s.releaseCard}>
      <Product/>
      <Releases/>
    </section>
      
  )
}