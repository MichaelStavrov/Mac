import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { macsModelSortByYear } from "../utils/macsModelSortByYear";
import s from "./macs.module.css";


export function Macs() {
  const year = "2020";

  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macsByYear = macsModelSortByYear(macs);

  // FIX
  const arrayMacsByYear = macsByYear[year] ?? [];

  function getArrayOfMacsSameYear(arrayMacsByYear: any): any {
    const result: any = [];
    for (const mac of arrayMacsByYear) {
      result.push(...mac.titles);
    }
    return result;
  }

  const arrayOfMacNames = getArrayOfMacsSameYear(arrayMacsByYear).map((name: any) => name.replace(/&quot;/g, ""));

  return (
    <section className={s.main}>
      <h3 className={s.title}>Apple Mac</h3>
      <ul>
        {arrayOfMacNames.map((name: any) => (
          <li className={s.item} key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
