import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { ProductStatus } from "../../../../types/macs"
import { getStatus } from "../utils/getStatus"

type ReleasesProps = {
  dates: Date[]
}

export const Releases = ({ dates }: ReleasesProps) => {
  
  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);    
  const { average, max } = getDatesMeta(arrayDatesWithDiff);
  
   
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper 
            date={dates[0]} 
            days={daysSinceLastRelease} 
            max={arrayDatesWithDiff.length > 0 ? max : daysSinceLastRelease}
            status={
              arrayDatesWithDiff.length > 0 ?
              getStatus(daysSinceLastRelease, max)
              : ProductStatus.midCycle
            }
              
          />
        </div>
      </div>
      {arrayDatesWithDiff.length > 0 && (
        <React.Fragment>
       <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Average</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper 
            days={average}
            max={max}
            status={getStatus(average, max)}
          />
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        {/* <div className={s.rightPart}>
          <ul>
            {arrayDatesWithDiff.map(obj =>
              <ReleaseProgressWrapper
                getMonthAndYearOfRelease={getMonthAndYearOfRelease} 
                date={obj.date} 
                days={obj.diff} 
                max={max} 
                key={+obj.date}
              />
            )}
          </ul>
        </div> */}
      </div>
      </React.Fragment>
    )}
    </section> 
  )
}