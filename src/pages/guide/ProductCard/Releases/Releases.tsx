import React from "react";
import s from "./releases.module.css";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";


const date = ["Nov 2020", "Mar 2020", "Jul 2019", "Oct 2018", "Jun 2017", "Mar 2015", "Apr 2014"]




export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        <div className={s.rightPart}>
          {date.map(date => <ReleaseProgressWrapper date={date}/>)}
        </div>
      </div>
     
    </section>
  )
}