import React from "react";
import s from "./progressLine.module.css";


export const ProgressLine = () => {
  return (
    <div className={s.progressLine}>
      <div className={s.progressInner}></div>
    </div>
  )
}