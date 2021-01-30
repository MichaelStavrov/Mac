import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";


const dates = ["10.11.2020", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]

function parseDate(str: any): any {
  const mdy = str.split('.'); 
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}

function getDateDiff(arrayDates: string[]) {
  const days = []
  for (let i = 0; i < arrayDates.length - 1; i++) {
    let diff = Math.round((parseDate(arrayDates[i]) - parseDate(arrayDates[i + 1])) / (1000*60*60*24));
    days.push(diff)
  }
  return days;
}

function createArrayDateWithDiff(dates: string[], days: number[]) {
  const result = [];
  const datesSlice = dates.slice(1)
  for (let i = 0; i < datesSlice.length; i++) {
    result.push({date: datesSlice[i], days: days[i]})
  }
  return result;
}

const datesWithDiff = createArrayDateWithDiff(dates, getDateDiff(dates));



export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        <div className={s.rightPart}>
          {datesWithDiff.slice(0, 6).map(obj => <ReleaseProgressWrapper date={obj.date} days={obj.days} key={Math.random()}/>)}
        </div>
      </div>
     
    </section>
  )
}