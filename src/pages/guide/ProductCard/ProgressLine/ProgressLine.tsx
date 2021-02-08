import React from "react";
import s from "./progressLine.module.css";
import cn from "classnames"

type ProgressLineProps = {
  daysSinceLastRelease?: number
  width: number | boolean
  max?: number
}

export const ProgressLine = ({ daysSinceLastRelease, width, max }: ProgressLineProps) => {

  return (
    <div className={s.progressLine}>
      <div className={cn(s.progressInner, daysSinceLastRelease && max !== 0 && {
        [s.green]: width <= 40,
        [s.yellow]: width > 40 && width < 80,
        [s.red]: width > 80
      })} style={{ width: width + "%" }}></div>
    </div>
  )
}