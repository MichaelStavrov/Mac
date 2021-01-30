import React from "react";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

type ReleaseProgressWrapperProps = {
  date: string
}

export const ReleaseProgressWrapper = ({date}: ReleaseProgressWrapperProps) => {
  return (
    <div className={s.releaseProgressWrapper}>
      <div className={s.left}>
        <div className={s.date}>{date}</div>
        <ProgressLine/>
      </div>
      <div className={s.right}>
        <div className={s.days}>81</div>
      </div>
      
    </div>
  )
}