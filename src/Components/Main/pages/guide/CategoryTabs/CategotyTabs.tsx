import React, { useState } from "react";
import s from "./categoryTabs.module.css";
import cn from 'classnames'
import { arrayProductCategories, IProductCategory } from "../../../../../types/tabBar";

type CategoryTabsProps = {
  onChangeTab: (tab: string | undefined) => void;
  category: IProductCategory;
  onChangeActive: (active: boolean) => void;
  active: boolean
};

export function CategoryTabs({ onChangeTab, category, onChangeActive, active }: CategoryTabsProps) {
  // const [active, setActive] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const { item } = e.currentTarget.dataset;
    onChangeTab(item);

    // if ((category.name === item)) {
    //   setActive(true);
    // } else {
    //   setActive(false)
    // }
    
   
  }

  return (
    <li
      className={cn({
        [s.item]: true,
        // [s.white]: active
      })}
      data-item={category.name}
      onClick={(e) => handleClick(e)}
    >
      <img src={category.img} className={s.image} alt={category.img} />
      {category.name}
    </li>
  );
}
