import React from 'react';
import s from './device.module.css';
import { IMacFamily } from "../../../../types/macs"
import { imgs } from "../../utils/getImg";


type DeviceProps = {
  mac: IMacFamily
  onChangeFamily: (macFamily: IMacFamily) => void
}

const productBuyStatus="Buy Now" 

export const Device = ({ mac, onChangeFamily }: DeviceProps) => {
  
  return (
    <li className={s.device} >
      <div className={s.link} onClick={() => onChangeFamily(mac)}>
        <div className={s.wrapImg}>
          <img src={imgs[mac]} alt={imgs[mac]} className={s.img} />
        </div>
        <h4 className={s.title} >{mac}</h4>
      </div>
      <div className={s.status}>
        <div className={s.productBuyStatus}>{productBuyStatus}</div>
      </div>
    </li>
  )
}

// export class Device extends React.Component<DeviceProps> {

//   render() {
//     const {mac, onChangeFamily} = this.props;
//     return (
//       <li className={s.device} >
//         <div className={s.link} onClick={() => onChangeFamily(mac)}>
//           <div className={s.wrapImg}>
//             <img src={imgs[mac]} alt={imgs[mac]} className={s.img} />
//           </div>
//           <h4 className={s.title} >{mac}</h4>
//         </div>
//         <div className={s.status}>
//           <div className={s.productBuyStatus}>{productBuyStatus}</div>
//         </div>
//       </li>
//     )
//   }
// }

// // console.log(<Device onChangeFamily={() => {}} mac="Mac Pro" />)
// // console.log(React.createElement(Device, { onChangeFamily: () => {}, mac: "Mac Pro"}));
// console.log(new Device({ onChangeFamily: () => {}, mac: "Mac Pro"}));
