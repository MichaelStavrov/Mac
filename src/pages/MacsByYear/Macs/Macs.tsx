import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { macsModelSortByYear } from "../utils/macsModelSortByYear";
import { getArrayOfMacsNamesSameYear } from "../utils/getArrayOfMacsNamesSameYear";
import { Mac } from "./Mac/Mac";
import s from "./macs.module.css";


export function Macs() {
  const year = "2020";

  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macsByYears = macsModelSortByYear(macs);

  // FIX
  const arrayMacsSameYear = macsByYears[year] ?? [];

  const arrayOfMacNames = getArrayOfMacsNamesSameYear(arrayMacsSameYear);

  return (
    <section className={s.main}>
      <h3 className={s.title}>Apple Mac</h3>
      <ul>
        {arrayOfMacNames.map((name) => 
          <Mac name={name} arrayMacsSameYear={arrayMacsSameYear} key={name}/>
        )}
      </ul>
    </section>
  );
}
