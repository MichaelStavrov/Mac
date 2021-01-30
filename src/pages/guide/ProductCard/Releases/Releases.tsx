import React from "react";
import { ReleaseProgressWrapper } from "../ReleaseProgressWrapper/ReleaseProgressWrapper";
import s from "./releases.module.css";



const days = "81"

export const Releases = () => {
  return (
    <section className={s.releases}>
      <div className={s.row}>
        <div className={s.leftPart}>
          <h3 className={s.title}>Recent releases</h3>
        </div>
        <div className={s.rightPart}>
          <ReleaseProgressWrapper/>
          <div className={s.days}>{days}</div>
        </div>
      </div>
     
    </section>
  )
}