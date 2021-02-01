import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";

const dates = ["10.11.2020", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]

function parseDate(date: any): any {
  const mdy = date.split('.');  
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}

const currentDate: any = new Date();
const daysSinceLastRelease = Math.round((currentDate - parseDate(dates[0])) / (1000*60*60*24));



function getDiff(arrayDates: string[]) {
  const arrayOfDiffs = [daysSinceLastRelease]
  for (let i = 0; i < arrayDates.length - 1; i++) {
    let diff = Math.round((parseDate(arrayDates[i]) - parseDate(arrayDates[i + 1])) / (1000*60*60*24));
    arrayOfDiffs.push(diff);
  }
  return arrayOfDiffs;
}

const arrayOfDiffs = getDiff(dates);

function createArrayDateWithDiff(dates: string[], arrayOfDiffs: number[]) {
  const result = [];
  for (let i = 0; i < dates.length; i++) {
    result.push({date: dates[i], diff: arrayOfDiffs[i]});
  }  
  return result;
}

const datesWithDiff = createArrayDateWithDiff(dates, arrayOfDiffs);

function getAverage(arrayOfDiffs: number[]): number {
  return Math.round(arrayOfDiffs.reduce((acc, num) => acc + num) / arrayOfDiffs.length);
}

const average = getAverage(arrayOfDiffs.slice(1, 7));

const max: number = Math.max(...arrayOfDiffs.slice(0, 6));

function getMonthAndYear(date: string): string {
  const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const year = date.slice(date.length - 4);
  let month = date.slice(date.length - 7, date.length - 5);
  month = months.find((_, i) => parseInt(month) === i + 1)!
  return `${month} ${year}`
}


export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper date={dates[0]} getMonthAndYear={getMonthAndYear} daysSinceLastRelease={daysSinceLastRelease} max={max}/>
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
            {datesWithDiff.slice(1, 7).map(obj =>
              <ReleaseProgressWrapper getMonthAndYear={getMonthAndYear} date={obj.date} days={obj.diff} max={max} key={Math.random()}/>
            )}
          </ul>
          
        </div>
      </div>
    </section>
  )
}