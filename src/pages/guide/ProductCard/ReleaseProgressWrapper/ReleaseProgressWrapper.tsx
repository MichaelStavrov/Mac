import React from "react";
import s from "./releaseProgressWrapper.module.css"
import { ProgressLine } from "../ProgressLine/ProgressLine";

const date = "Nov 2020"

export const ReleaseProgressWrapper = () => {
  return (
    <div className={s.releaseProgressWrapper}>
      <div className={s.date}>{date}</div>
      <ProgressLine/>
    </div>
  )
}