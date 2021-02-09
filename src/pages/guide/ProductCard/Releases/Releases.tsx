import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { parseDate } from "../utils/parseDate"
import { getMonthAndYearOfRelease }  from "../utils/getMonthAndYearOfRelease"

const dates = ["10.11.2020", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]
// const dates = ["08.02.2021", "18.03.2020", "09.07.2019", "30.10.2018", "05.06.2017", "09.03.2015", "29.04.2014"]
// const dates = ["08.02.2021"]

const dateOfLastRelease = parseDate(dates[0]);
const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
const arrayDatesWithDiff = releasesDateInfo(dates);

const { average, max } = getDatesMeta(arrayDatesWithDiff);


export const Releases: React.FC = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper 
            date={dateOfLastRelease} 
            getMonthAndYearOfRelease={getMonthAndYearOfRelease} 
            daysSinceLastRelease={daysSinceLastRelease} 
            max={max}/>
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
            {arrayDatesWithDiff.map(obj =>
              <ReleaseProgressWrapper
                getMonthAndYearOfRelease={getMonthAndYearOfRelease} 
                date={obj.date} days={obj.diff} 
                max={max} 
                key={+obj.date}/>
            )}
          </ul>
        </div>
      </div>
    </section> 
  )
}