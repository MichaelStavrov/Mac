import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

type ReleaseProgressWrapperProps = {
  date?: Date
  days?: number
  average?: number
  daysSinceLastRelease?: number
  max?: number
  getMonthAndYearOfRelease?: (date: Date) => string
}

export const ReleaseProgressWrapper = ({
  date, 
  days, 
  average, 
  daysSinceLastRelease, 
  max, 
  getMonthAndYearOfRelease
}: ReleaseProgressWrapperProps) => {
  
  const width = (daysSinceLastRelease || average || days!) * 100 / max!

  // Почему не работает?
  // const dateRelease = getMonthAndYearOfRelease!(date!) 
  
  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYearOfRelease!(date!)}</Link>}
        <ProgressLine 
          daysSinceLastRelease={daysSinceLastRelease}
          width={width}
        />
      </div>
      <div className={s.right}>
        {daysSinceLastRelease && 
          <div className={cn(
            s.daysSinceLastRelease,
            {
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