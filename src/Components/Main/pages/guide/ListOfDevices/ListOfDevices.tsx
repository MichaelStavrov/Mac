import s from "./listOfDevices.module.css";
import { Device } from "./Device/Device";
import { MAC_FAMILIES } from "../../../../../types/macs";
import { useState } from "react";
import arrowBack from "../../../../../img/arrows/back.svg";
import arrowNext from "../../../../../img/arrows/next.svg";

export const ListOfDevices = () => {
  const [width, setWidth] = useState(0);
  if (width > 0) {
    setWidth(0);
  }
  if (width < -550) {
    setWidth(-550);
  }
  return (
    <div className={s.wrapList}>
      <ul
        className={s.listOfDevices}
        style={{ transform: `translateX(${width}px)` }}
      >
        {MAC_FAMILIES.map((mac) => (
          <Device mac={mac} key={mac} />
        ))}
      </ul>
      <button
        className={s.buttonSliderBack}
        type="button"
        onClick={() => setWidth((prev) => prev + 360)}
      >
        <img src={arrowBack} alt="back" />
      </button>
      <button
        className={s.buttonSliderForward}
        type="button"
        onClick={() => setWidth((prev) => prev - 360)}
      >
        <img src={arrowNext} alt="next" />
      </button>
    </div>
  );
};
