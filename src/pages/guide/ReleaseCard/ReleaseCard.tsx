import React from "react";
import s from "./releaseCard.module.css";

type ReleaseCardProps = {
  image: string,
  title: string,
  productBuyStatus: string,
  statusCell: string,
  descripton: string
  
}

export const ReleaseCard = ({image, title, productBuyStatus, statusCell, descripton}: ReleaseCardProps) => {
  return (
    <div>
      <section className={s.product}>
        <div className={s.productImage}>
          <img src={image}/>
        </div>
        <div className={s.productInfo}>
          <h1>{title}</h1>
          <div className={s.status}>
            <div className={s.productBuyStatus}>{productBuyStatus}</div>
            <div className={s.statusCell}>{statusCell}</div>
          </div>
          <p className={s.descripton}>{descripton}</p>
          
          {/* как поставить src атрибут? */}
          <a className={s.linkMore}>MacBook Air Roundup</a>
        </div>
      </section>
    </div>
  )
}