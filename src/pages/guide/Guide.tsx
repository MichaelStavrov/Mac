import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices";
import { IRootState } from "../../store";
import { arrayProductCategory, ProductCategory } from "../../types/tabBar";

export const Guide = () => {
  const [tab, setTab] = useState<string | undefined>("Macs");
  const status = useSelector((state: IRootState) => state.macs.loading);

  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const { item } = e.currentTarget.dataset
    setTab(item);
  }

  if (["loading", "idle"].includes(status)) {
    return <div>Loading</div>;
  }

  return (
    <section className={s.guide}>
      <ul className={s.tabBar}>
        {arrayProductCategory.map((category) => (
          <li
            className={s.item}
            data-item={category.name}
            onClick={(e) => handleClick(e)}
            key={category.name}
          >
            <img src={category.img} className={s.image} alt={category.img} />
            {category.name}
          </li>
        ))}
      </ul>
      {tab === ProductCategory.iPhone && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
      {tab === ProductCategory.Macs && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
      {tab === ProductCategory.Music && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
      {tab === ProductCategory.Watch && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
    </section>
  );
};
