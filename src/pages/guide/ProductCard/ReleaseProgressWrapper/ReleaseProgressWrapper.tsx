import React from "react";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

type ReleaseProgressWrapperProps = {
  date?: string
  days?: number
  average?: number
  daysSinceLastRelease?: number
  max?: number
  getMonthAndYear?: (date: string) => string
}

export const ReleaseProgressWrapper = ({date, days, average, daysSinceLastRelease, max, getMonthAndYear}: ReleaseProgressWrapperProps) => {

  // const monthAndYear: string = getMonthAndYear!(date!) почему не работает?
  
  const width = (daysSinceLastRelease! * 100 / max!) || (average! * 100 / max!) || (days! * 100 / max!)

  
  let color = "#426694"
  if (width <= 40) {
    color = "#66bc00"
  } else if (width > 40 && width < 80) {
    color =  "#dddd20"
  } else {
    color = "#aa0d23"
  }
  

  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYear!(date)}</Link>}
        <ProgressLine 
          daysSinceLastRelease={daysSinceLastRelease}
          width={width}
          backgroundColor={color}
        />
      </div>
      <div className={s.right}>
        {daysSinceLastRelease && 
          <div className={s.daysSinceLastRelease} style={{color}}>{daysSinceLastRelease}</div>
        }
        {average && <div className={s.days}>{average}</div>}
        {days && <div className={s.days}>{days}</div>}
      </div>
    </li>
  )
}