import React from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from 'react-router-dom'
import { IRootState } from "../../../../store";
import { macsModelSortByYear } from "../utils/macsModelSortByYear";
import { getArrayOfMacsNamesSameYear } from "../utils/getArrayOfMacsNamesSameYear";
import { ItemByYear } from "./ItemByYear/ItemByYear";
import s from "./listByYear.module.css";


export function ListByYear() {
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const {year} = useParams<{year: string}>();
  const macsByYears = macsModelSortByYear(macs);  
    
  // console.log(useLocation());
  
  // FIX
  const arrayMacsSameYear = macsByYears[year] ?? [];

  const arrayOfMacNames = getArrayOfMacsNamesSameYear(arrayMacsSameYear);

  return (
    <section className={s.main}>
      <p>Complete technical specifications for every Apple Mac released in {year} are listed below. For other years, see the main By Year page. Currently Shipping Macs additionally may be of interest.</p>
      <ul className={s.list}>
        {arrayOfMacNames.map((name) => 
          
          <ItemByYear name={name} arrayMacsSameYear={arrayMacsSameYear} key={name}/>
        )}
      </ul>
    </section>
  );
}