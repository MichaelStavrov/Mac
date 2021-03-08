import React from 'react';
import { useSelector } from 'react-redux';
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices"
import {IRootState} from "../../store";

export const Guide: React.FC = () => {
  const status = useSelector((state: IRootState) => state.macs.loading);


  if (["loading", "idle"].includes(status)) {
    return <div>Loading</div>;
  }

  return (
    <section className={s.guide}>
      <h1>Byeyer's Guide</h1>
      <ListOfDevices />
      <ProductCard />
    </section>
  )
}