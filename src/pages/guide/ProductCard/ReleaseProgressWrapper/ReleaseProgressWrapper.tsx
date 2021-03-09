import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames"
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";
import { ProductStatus, ProductColorStatus } from "../../../../types/productStatus"
import { getMonthAndYearOfRelease } from "../utils/getMonthAndYearOfRelease"

type ReleaseProgressWrapperProps = {
  date?: Date
  days: number
  max: number
  status?: ProductStatus
}

export const ReleaseProgressWrapper = ({
  date,
  days,
  max,
  status
}: ReleaseProgressWrapperProps) => {
  
  const color = status ? ProductColorStatus[status] : "inherit";

  

  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{getMonthAndYearOfRelease(date)}</Link>}
        <ProgressLine
          days={days}
          max={max}
          status={status}
        />
      </div>
      <div className={s.right}>
        <div
          className={cn(
            s.days, 
            status && s.fz40
          )}
          style={{color}}>
          {days}
        </div>
      </div>
    </li>
  )
}