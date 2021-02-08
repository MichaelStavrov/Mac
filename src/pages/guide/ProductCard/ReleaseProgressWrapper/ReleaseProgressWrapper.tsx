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

  let width = (daysSinceLastRelease || average || days!) * 100 / max!
  if (daysSinceLastRelease === 0) {
    width = 0;
  }

  // when array "dates" size 1
  if (max === 0) {
    width = 100;
  }

 console.log(average);
 

  // Почему не работает?
  // const dateRelease = getMonthAndYearOfRelease!(date!) 

  return (
    <li className={cn({
      [s.releaseProgressWrapper]: true, 
      [s.p0]: average! >= 0 || daysSinceLastRelease! >= 0
      })}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYearOfRelease!(date!)}</Link>}
        <ProgressLine
          daysSinceLastRelease={daysSinceLastRelease}
          width={width}
          max={max}
        />
      </div>
      <div className={s.right}>
        {daysSinceLastRelease! >= 0 &&
          <div className={cn(
            s.daysSinceLastRelease,
            max !== 0 && {
              [s.green]: width <= 40,
              [s.yellow]: width > 40 && width < 80,
              [s.red]: width > 80
            })}>
            {daysSinceLastRelease}
          </div>
        }
        {average! > 0 && <div className={s.days}>{average}</div>}
        {days && <div className={s.days}>{days}</div>}
      </div>
    </li>
  )
}