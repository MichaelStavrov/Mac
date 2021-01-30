import React from 'react';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";

export const Guide: React.FC = () => {
  return (
    <div className={s.guid}>
      <h1>Byeyer's Guide</h1>
      <ProductCard/>
    </div>
  )
}