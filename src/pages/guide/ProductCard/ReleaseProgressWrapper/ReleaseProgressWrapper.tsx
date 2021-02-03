import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
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

  
  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYear!(date)}</Link>}
        <ProgressLine 
          daysSinceLastRelease={daysSinceLastRelease}
          width={width}
        />
      </div>
      <div className={s.right}>
        {daysSinceLastRelease && 
          <div className={cn({
            [s.daysSinceLastRelease]: true,
            [s.green]: width <= 40,
            [s.yellow]: width > 40 && width < 80,
            [s.red]: width > 80
          })}>{daysSinceLastRelease}</div>
        }
        {average && <div className={s.days}>{average}</div>}
        {days && <div className={s.days}>{days}</div>}
      </div>
    </li>
  )
}