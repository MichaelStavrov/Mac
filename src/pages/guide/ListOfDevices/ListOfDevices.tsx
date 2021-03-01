import React from 'react';
import s from "./listOfDevices.module.css";
import { Device } from "./Device/Device"
import { MAC_FAMILIES, IMacFamily } from "../../../types/macs"

type ListOfDevicesProps = {
  onChangeFamily: (macFamily: IMacFamily) => void
}

export const ListOfDevices = ({ onChangeFamily }: ListOfDevicesProps) => {
  return (
    <ul className={s.listOfDevices}>
      {MAC_FAMILIES.map(mac => 
        <Device onChangeFamily={onChangeFamily} mac={mac} key={mac}/>
      )}
    </ul>
  )
}