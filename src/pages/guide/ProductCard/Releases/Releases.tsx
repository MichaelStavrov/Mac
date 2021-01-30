import React from "react";
import s from "./releases.module.css";
import { ProgressLine } from "./ProgressLine/ProgressLine";

const date = "Nov 2020"
const days = "81"

export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <div className={s.releaseProgressWrapper}>
            <div className={s.date}>{date}</div>
            <ProgressLine/>
          </div>
          <div className={s.days}>{days}</div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <div className={s.releaseProgressWrapper}>
            <div className={s.date}>{date}</div>
            <ProgressLine/>
          </div>
          <div className={s.days}>{days}</div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Days since last release</h3>
        </div>
        <div className={s.rightPart}>
          <div className={s.releaseProgressWrapper}>
            <div className={s.date}>{date}</div>
            <ProgressLine/>
          </div>
          <div className={s.days}>{days}</div>
        </div>
      </div>
    </section>
  )
}