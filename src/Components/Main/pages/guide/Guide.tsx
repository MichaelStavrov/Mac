import React, { useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices";
import { IRootState } from "../../../../store";
import {
  arrayProductCategories,
  ProductCategory,
} from "../../../../types/tabBar";

export const Guide = () => {
  const [category, setCategory] = useState("Macs");
  const status = useSelector((state: IRootState) => state.macs.loading);

  if (["loading", "idle"].includes(status)) {
    return <div>loading</div>;
  }

  return (
    <div className={s.guide}>
      <div className={s.pageDescription}>
        <h2 className={s.title}>Buyer's Guide</h2>
        <p>
          This page provides a product summary for each Apple model. The intent
          is to provide our best recommendations regarding current product
          cycles, and to provide a summary of currently available rumors for
          each model.
        </p>
        <p>
          This page is based on rumors and speculation and we provide no
          guarantee to its accuracy.
        </p>
      </div>
      <ul className={s.tabBar}>
        {arrayProductCategories.map((section) => (
          <li
            className={cn({
              [s.item]: true,
              [s.backgroundWhite]: section.name === category,
            })}
            onClick={() => setCategory(section.name)}
            key={section.name}
          >
            <img src={section.img} className={s.image} alt={section.img} />
            {section.name}
          </li>
        ))}
      </ul>
      {category === ProductCategory.iPhone && <div>IPhone</div>}
      {category === ProductCategory.Macs && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
      {category === ProductCategory.Music && <div>Music</div>}
      {category === ProductCategory.Watch && <div>Watch</div>}
    </div>
  );
};
