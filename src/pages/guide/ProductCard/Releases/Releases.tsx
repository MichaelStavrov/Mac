import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { ProductStatus } from "../../../../types/productStatus"

type ReleasesProps = {
  dates: Date[];
  status: ProductStatus
}

export const Releases = ({ dates, status }: ReleasesProps) => {
  
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
            status={status}/>
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
              />
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
                    key={+obj.date}
                    date={obj.date} 
                    days={obj.diff} 
                    max={max} 
                  />
                )}
              </ul>
            </div>
          </div>
        </React.Fragment>
    )}
    </section> 
  )
}