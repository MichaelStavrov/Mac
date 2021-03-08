import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import { releasesDateInfo } from "../utils/releasesDateInfo"
import { getDatesMeta } from "../utils/getDatesMeta"
import { getDaysSinceLastRelease } from "../utils/getDaysSinceLastRelease"
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store";
import { IMacModelDict, IMacModelId } from "../../../../types/macs";
import { getDates } from "../../utils/getDates";
import { getMacFamilyIds } from "../../utils/getMacFamilyIds";
import { macsArrayToDict } from "../../utils/macsArrayToDict";


export const Releases = () => {
  const status = useSelector((state: IRootState) => state.macs.status)

  
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const macFamily = useSelector((state: IRootState) => state.macs.macFamily);
  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, macFamily);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);
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