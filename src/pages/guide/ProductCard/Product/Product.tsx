import React from "react";
import { Link } from "react-router-dom";
import s from "./product.module.css";
import { IMacFamily } from "../../../../types/macs";

const productBuyStatus="Buy Now" 
const statusCell="Just Updated" 
const descripton="The MacBook Air was updated on November 10, 2020, with a new M1 chip from Apple, integrating the CPU and graphics with a Neural Engine for machine learning capabilities all on a single chip."

type ProductProps = {
  macFamily: IMacFamily
  img: string
}

export const Product = ({ macFamily, img }: ProductProps) => {
  return (
    <section className={s.product}>
        <div className={s.productImage}>
          <img src={img} className={s.image} alt={img}/>
        </div>
        <div className={s.productInfo}>
          <Link to="/" className={s.title}>{macFamily}</Link>
          <div className={s.status}>
            <div className={s.productBuyStatus}>{productBuyStatus}</div>
            <div className={s.statusCell}>{statusCell}</div>
          </div>
          <p className={s.descripton}>{descripton}</p>

          {/* как поставить src атрибут у ссылки? */}
          <Link to="/" className={s.linkMore}>{macFamily} Roundup</Link>
        </div>
      </section>
  )
}