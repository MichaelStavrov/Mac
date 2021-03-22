import s from "./listOfDevices.module.css";
import { Device } from "./Device/Device"
import { MAC_FAMILIES } from "../../../../../types/macs"

export const ListOfDevices = () => {
  return (
    <ul className={s.listOfDevices}>
      {MAC_FAMILIES.map(mac => 
        <Device mac={mac} key={mac}/>
      )}
    </ul>
  )
}