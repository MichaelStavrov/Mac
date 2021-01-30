import React from "react";
import s from "./productCard.module.css";
import { Product } from "./Product/Product";


export const ProductCard = () => {
  return (
    <section className={s.releaseCard}>
      <Product/>
    </section>
      
  )
}