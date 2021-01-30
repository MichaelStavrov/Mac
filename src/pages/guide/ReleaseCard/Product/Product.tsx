import React from "react";
import { Link } from "react-router-dom";
import s from "./product.module.css";

import image from "./img/macbook-air-470.png"
const title="MacBook Air" 
const productBuyStatus="Buy Now" 
const statusCell="Just Updated" 
const descripton="The MacBook Air was updated on November 10, 2020, with a new M1 chip from Apple, integrating the CPU and graphics with a Neural Engine for machine learning capabilities all on a single chip."

export const Product = () => {
  return (
    <section className={s.product}>
        <div className={s.productImage}>
          <img src={image} className={s.image}/>
        </div>
        <div className={s.productInfo}>
          <Link to="/" className={s.title}>{title}</Link>
          <div className={s.status}>
            <div className={s.productBuyStatus}>{productBuyStatus}</div>
            <div className={s.statusCell}>{statusCell}</div>
          </div>
          <p className={s.descripton}>{descripton}</p>

          {/* как поставить src атрибут у ссылки? */}
          <Link to="/" className={s.linkMore}>MacBook Air Roundup</Link>
        </div>
      </section>
  )
}