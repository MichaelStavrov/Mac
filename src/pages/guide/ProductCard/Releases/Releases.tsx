import React from "react";
import s from "./productCard.module.css";
import { ProgressLine } from "./ProgressLine/ProgressLine";

export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.lastRelease}>
        <div className={s.leftPart}>Days since last release</div>
        <div className={s.rightPart}>
          <div className={s.releaseProgressWrapper}>
            <div className={s.date}></div>
            <ProgressLine/>
          </div>
          <div className={s.days}></div>
        </div>
      </div>
    </section>
  )
}