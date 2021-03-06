import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { macsModelSortByYear } from "../utils/macsModelSortByYear";
import { Mac } from "./Mac/Mac";
import s from "./macs.module.css";


export function Macs() {
  const year = "2020";

  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macsByYears = macsModelSortByYear(macs);

  // FIX
  const arrayMacsSameYear = macsByYears[year] ?? [];
  
  function getArrayOfMacsSameYear(arrayMacsSameYear: any): any {
    const result: any = [];
    for (const mac of arrayMacsSameYear) {
      result.push(...mac.titles);
    }
    return result;
  }

  const arrayOfMacNames = getArrayOfMacsSameYear(arrayMacsSameYear);

  return (
    <section className={s.main}>
      <h3 className={s.title}>Apple Mac</h3>
      <ul>
        {arrayOfMacNames.map((name: any) => 
          <Mac name={name} arrayMacsSameYear={arrayMacsSameYear} key={name}/>
        )}
      </ul>
    </section>
  );
}
