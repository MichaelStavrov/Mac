import React from 'react';
import s from "./guide.module.css";
import { ReleaseCard } from "./ReleaseCard/ReleaseCard";

export const Guide: React.FC = () => {
  return (
    <div className={s.guid}>
      <h1>Byeyer's Guide</h1>
      <ReleaseCard/>
    </div>
  )
}