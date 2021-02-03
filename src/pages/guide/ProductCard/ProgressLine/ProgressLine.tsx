import React from "react";
import s from "./progressLine.module.css";

type ProgressLineProps = {
  daysSinceLastRelease?: number
  width: number
}

export const ProgressLine = ({daysSinceLastRelease, width, }: ProgressLineProps) => {

  let backgroundColor = "#426694"
    if (width <= 40) {
      backgroundColor = "#66bc00"
    } else if (width > 40 && width < 80) {
      backgroundColor =  "#dddd20"
    } else {
      backgroundColor = "#aa0d23"
  }

  const style = daysSinceLastRelease ? {width: width + "%", backgroundColor} : {width: width + "%"}

  
  return (
    <div className={s.progressLine}>
      <div className={s.progressInner} style={style}></div>
    </div>
  )
}