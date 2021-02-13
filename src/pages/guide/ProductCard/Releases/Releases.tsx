import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { getMonthAndYearOfRelease }  from "../utils/getMonthAndYearOfRelease"


type ReleasesProps = {
  dates: Date[]
}

export const Releases = ({ dates }: ReleasesProps) => {
  
  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);    
  const { average, max } = getDatesMeta(arrayDatesWithDiff);
  
  function getWidthProgressLine(days: number, max: number): number {
    if (max === 0) {
      return 100;
    }
    return Math.round(days * 100 / max);
  }

  

  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper 
            date={dates[0]} 
            getMonthAndYearOfRelease={getMonthAndYearOfRelease} 
            daysSinceLastRelease={daysSinceLastRelease} 
            max={max}
            width={getWidthProgressLine(daysSinceLastRelease, max)}
          />
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Average</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper 
            average={average}
            max={max} 
            width={getWidthProgressLine(average, max)}/>
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
                date={obj.date} 
                days={obj.diff} 
                max={max} 
                key={+obj.date}
                width={getWidthProgressLine(obj.diff, max)}
              />
            )}
          </ul>
        </div>
      </div>
    </section> 
  )
}