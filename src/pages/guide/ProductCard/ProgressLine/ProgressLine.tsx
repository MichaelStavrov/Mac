import React from "react";
import s from "./progressLine.module.css";
import cn from "classnames"
import { ProductStatus, ProductColorStatus } from "../../../../types/macs"


type ProgressLineProps = {
  days: number
  max: number
  status: ProductStatus
}

export const ProgressLine = ({ days, max, status }: ProgressLineProps) => {

  const width = (days * 100 / max) + "%";
  const background = ProductColorStatus[status];

  return (
    <div className={s.progressLine}>
      <div className={s.progressInner} style={{ width, background}}></div>
    </div>
  )
}