import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";

const dates = ["10.11.2020", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]

function parseDate(date: any): any {
  const mdy = date.split('.');  
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}

function getDiff(arrayDates: string[]) {
  const arrayOfDiffs = []
  for (let i = 0; i < arrayDates.length - 1; i++) {
    let diff = Math.round((parseDate(arrayDates[i]) - parseDate(arrayDates[i + 1])) / (1000*60*60*24));
    arrayOfDiffs.push(diff);
  }
  return arrayOfDiffs;
}

const arrayOfDiffs = getDiff(dates);

function createArrayDateWithDiff(dates: string[], arrayOfDiffs: number[]) {
  const result = [];
  const datesWithoutFirstDate = dates.slice(1);
  for (let i = 0; i < datesWithoutFirstDate.length; i++) {
    result.push({date: datesWithoutFirstDate[i], diff: arrayOfDiffs[i]});
  }
  return result;
}

const datesWithDiff = createArrayDateWithDiff(dates, arrayOfDiffs);

function getAverage(arrayOfDiffs: number[]): number {
  return Math.round(arrayOfDiffs.reduce((acc, num) => acc + num) / arrayOfDiffs.length);
}

const average = getAverage(arrayOfDiffs.slice(0, 6));

const currentDate: any = new Date();
const daysSinceLastRelease = Math.round((currentDate - parseDate(dates[0])) / (1000*60*60*24));

const max: number = Math.max(...arrayOfDiffs.slice(0, 6));

export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper daysSinceLastRelease={daysSinceLastRelease} max={max}/>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Average</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper average={average} max={max}/>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        <div className={s.rightPart}>
          <ul>
            {datesWithDiff.slice(0, 6).map(obj =>
              <ReleaseProgressWrapper date={obj.date} days={obj.diff} max={max} key={Math.random()}/>
            )}
          </ul>
          
        </div>
      </div>
    </section>
  )
}