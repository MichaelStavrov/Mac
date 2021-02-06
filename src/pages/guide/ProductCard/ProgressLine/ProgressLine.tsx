import React from "react";
import s from "./progressLine.module.css";
import cn from "classnames"

type ProgressLineProps = {
  daysSinceLastRelease?: number
  width: number
}

export const ProgressLine = ({ daysSinceLastRelease, width }: ProgressLineProps) => {

  const backgroundColor = {
    [s.green]: width <= 40,
    [s.yellow]: width > 40 && width < 80,
    [s.red]: width > 80
  }

  return (
    <div className={s.progressLine}>
      <div className={cn(s.progressInner, daysSinceLastRelease && backgroundColor)} style={{width: width + "%"}}></div>
    </div>
  )
}