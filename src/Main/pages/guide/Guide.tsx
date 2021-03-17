import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./guide.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { ListOfDevices } from "./ListOfDevices//ListOfDevices";
import { IRootState } from "../../../store";
import { arrayProductCategory, ProductCategory } from "../../../types/tabBar";
import { CategoryTabs } from "./CategoryTabs/CategotyTabs";

export const Guide = () => {
  const [tab, setTab] = useState<string | undefined>("Macs");
  const status = useSelector((state: IRootState) => state.macs.loading);


  if (["loading", "idle"].includes(status)) {
    return <div>Loading</div>;
  }

  return (
    <div className={s.guide}>
      <div className={s.pageDescription}>
        <h2 className={s.title}>Buyer's Guide</h2>
        <p>This page provides a product summary for each Apple model. The intent is to provide our best recommendations regarding current product cycles, and to provide a summary of currently available rumors for each model.</p>
        <p>This page is based on rumors and speculation and we provide no guarantee to its accuracy.</p>
      </div>
      <ul className={s.tabBar}>
        {arrayProductCategory.map((category) => (
          <CategoryTabs
            onChangeTab={setTab}
            category={category}
            key={category.name}
          />
        ))}
      </ul>
      {tab === ProductCategory.iPhone && (
       <div>IPhone</div>
      )}
      {tab === ProductCategory.Macs && (
        <React.Fragment>
          <ListOfDevices />
          <ProductCard />
        </React.Fragment>
      )}
      {tab === ProductCategory.Music && (
       <div>Music</div>
      )}
      {tab === ProductCategory.Watch && (
       <div>Watch</div>
      )}
    </div>
  );
};
