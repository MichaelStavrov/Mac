import React from "react";
import s from "./releaseCard.module.css";
import { Product } from "./Product/Product";


export const ReleaseCard = () => {
  return (
    <section className={s.releaseCard}>
      <Product/>
    </section>
      
  )
}