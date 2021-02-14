import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";
import { ProductStatus, ProductColorStatus } from "../../../../types/macs"
import { getMonthAndYearOfRelease } from "../utils/getMonthAndYearOfRelease"

type ReleaseProgressWrapperProps = {
  date?: Date
  days: number
  max: number
  status: ProductStatus
}

export const ReleaseProgressWrapper = ({
  date,
  days,
  max,
  status
}: ReleaseProgressWrapperProps) => {

  const color = ProductColorStatus[status];

  return (
    <li className={cn({
      [s.releaseProgressWrapper]: true,
      [s.p0]: days >= 0
    })}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYearOfRelease(date)}</Link>}
        <ProgressLine
          days={days}
          max={max}
          status={status}
        />
      </div>
      <div className={s.right}>
        <div className={s.daysSinceLastRelease} style={{color}}>
          {days}
        </div>
      </div>
    </li>
  )
}