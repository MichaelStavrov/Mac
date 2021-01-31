import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";

export type ReleaseProgressWrapperProps = {
  date?: string
  days?: number
  average?: number
  daysSinceLastRelease?: number
}

const dates = ["10.11.2020", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]

function parseDate(str: any): any {
  const mdy = str.split('.');  
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}

function getDiff(arrayDates: string[]) {
  const days = []
  for (let i = 0; i < arrayDates.length - 1; i++) {
    let diff = Math.round((parseDate(arrayDates[i]) - parseDate(arrayDates[i + 1])) / (1000*60*60*24));
    days.push(diff)
  }
  return days;
}

const days = getDiff(dates)


function createArrayDateWithDiff(dates: string[], days: number[]) {
  const result = [];
  const datesWithoutFirstDate = dates.slice(1)
  for (let i = 0; i < datesWithoutFirstDate.length; i++) {
    result.push({date: datesWithoutFirstDate[i], days: days[i]})
  }
  return result;
}

const datesWithDiff = createArrayDateWithDiff(dates, days);

function getAverage(days: number[]): number {
  return Math.round(days.reduce((acc, num) => acc + num) / days.length);
}

const average = getAverage(days);

function getDaysSinceLastRelease(): number {
  const currentDate: any = new Date()
  return Math.round((currentDate - parseDate(dates[0])) / (1000*60*60*24))
}

const daysSinceLastRelease = getDaysSinceLastRelease();

export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper daysSinceLastRelease={daysSinceLastRelease}/>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Average</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper average={average}/>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        <div className={s.rightPart}>
          <ul>
            {datesWithDiff.slice(0, 6).map(obj => <ReleaseProgressWrapper date={obj.date} days={obj.days} key={Math.random()}/>)}
          </ul>
          
        </div>
      </div>
     
    </section>
  )
}