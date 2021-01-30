import React from "react";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

type ReleaseProgressWrapperProps = {
  date: string
  days: number
}

export const ReleaseProgressWrapper = ({date, days}: ReleaseProgressWrapperProps) => {


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
  const year: string = date.slice(date.length - 4)
  const month: string = date.slice(date.length - 7, date.length - 5)



  return (
    <div className={s.releaseProgressWrapper}>
      <div className={s.left}>
        <div className={s.date}>{months[month]} {year}</div>
        <ProgressLine/>
      </div>
      <div className={s.right}>
        <div className={s.days}>{days}</div>
      </div>
      
    </div>
  )
}