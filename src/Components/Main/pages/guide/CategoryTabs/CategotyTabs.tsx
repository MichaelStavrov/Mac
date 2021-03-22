import React from "react";
import s from "./categoryTabs.module.css";
import { IProductCategory } from "../../../../../types/tabBar";

type CategoryTabsProps = {
  onChangeTab: (tab: string | undefined) => void;
  category: IProductCategory;
};

export function CategoryTabs({ onChangeTab, category }: CategoryTabsProps) {
  

  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const { item } = e.currentTarget.dataset;
    onChangeTab(item);
  }

  return (
    <li
      className={s.item}
      data-item={category.name}
      onClick={(e) => handleClick(e)}
    >
      <img src={category.img} className={s.image} alt={category.img} />
      {category.name}
    </li>
  );
}
