import React from "react";
import { Link } from "react-router-dom";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

type ReleaseProgressWrapperProps = {
  date?: string
  days?: number
  average?: number
  daysSinceLastRelease?: number
  max?: number
}

export const ReleaseProgressWrapper = ({date, days, average, daysSinceLastRelease, max}: ReleaseProgressWrapperProps) => {

  const months: any = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec" 
  }

  let year: string = "";
  let month: string = "";

  if (date && days) {
    year = date.slice(date.length - 4)
    month = date.slice(date.length - 7, date.length - 5)
  }
 
  let width = (daysSinceLastRelease! * 100 / max!) || (average! * 100 / max!) || (days! * 100 / max!)
  if (width > 100) {
    width = 100;
  }
  
  let color = "#426694"
  if (daysSinceLastRelease) {
    if (width <= 40) {
      color = "green"
    } else if (width > 40 && width < 80) {
      color =  "#dddd20"
    } else {
      color = "red"
    }
  }

  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{months[month]} {year}</Link>}
        <ProgressLine 
          daysSinceLastRelease={daysSinceLastRelease}
          width={width}/>
      </div>
      <div className={s.right}>
        {daysSinceLastRelease && <div className={s.daysSinceLastRelease} style={{color}}>{daysSinceLastRelease}</div>}
        {average && <div className={s.days}>{average}</div>}
        {days && <div className={s.days}>{days}</div>}
      </div>
    </li>
  )
}