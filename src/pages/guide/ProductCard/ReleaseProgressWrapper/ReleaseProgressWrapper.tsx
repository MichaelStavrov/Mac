import React from "react";
import { Link } from "react-router-dom";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

import {ReleaseProgressWrapperProps } from "../Releases/Releases"

export const ReleaseProgressWrapper = ({date, days, average}: ReleaseProgressWrapperProps) => {

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
    year = date!.slice(date!.length - 4)
    month = date!.slice(date!.length - 7, date!.length - 5)
  }
  

  return (
    <li className={s.releaseProgressWrapper}>
      <div className={s.left}>
        {date && <Link to="/" className={s.date}>{months[month]} {year}</Link>}
        <ProgressLine/>
      </div>
      <div className={s.right}>
        {days && <div className={s.days}>{days}</div>}
        {average && <div className={s.days}>{average}</div>}
      </div>
      
    </li>
  )
}