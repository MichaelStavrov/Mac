import React from "react";
import s from "./progressLine.module.css";

type ProgressLineProps = {
  daysSinceLastRelease?: number
  width: number
  backgroundColor: string
}

export const ProgressLine = ({daysSinceLastRelease, width, backgroundColor}: ProgressLineProps) => {

  const style = daysSinceLastRelease ? {width: width + "%", backgroundColor} : {width: width + "%"}
  
  return (
    <div className={s.progressLine}>
      <div className={s.progressInner} style={style}></div>
    </div>
  )
}