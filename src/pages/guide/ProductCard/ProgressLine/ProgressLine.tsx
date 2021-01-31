import React from "react";
import s from "./progressLine.module.css";

type ProgressLineProps = {
  daysSinceLastRelease?: any
  max?: any
  days?: number
  average?: number
  width?: number
}

export const ProgressLine = ({daysSinceLastRelease, max, days, average, width}: ProgressLineProps) => {
  
  let backgroundColor = "#426694"
  if (daysSinceLastRelease) {
    if (width! <= 40) {
      backgroundColor = "green"
    } else if (width! > 40 && width! <= 80) {
      backgroundColor =  "#dddd20"
    } else {
      backgroundColor = "red"
    }
  }
  
  return (
    <div className={s.progressLine}>
      <div className={s.progressInner} style={{width: width + "%", backgroundColor}}
      ></div>
    </div>
  )
}