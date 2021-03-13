import React from 'react';
import s from './device.module.css';
import { IMacFamily, IMacModelDict, IMacModelId } from "../../../../types/macs"
import { imgs } from "../../../../img/images";
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, setMacFamily, setStatus } from '../../../../store';
import { ProductColorStatus, ProductStatus } from '../../../../types/productStatus';
import { getDatesMeta } from '../../ProductCard/utils/getDatesMeta';
import { getDaysSinceLastRelease } from '../../ProductCard/utils/getDaysSinceLastRelease';
import { getProductBuyStatus, getStatus } from '../../ProductCard/utils/getStatus';
import { releasesDateInfo } from '../../ProductCard/utils/releasesDateInfo';
import { getDates } from '../../utils/getDates';
import { getMacFamilyIds } from '../../utils/getMacFamilyIds';
import { macsArrayToDict } from '../../utils/macsArrayToDict';

type DeviceProps = {
  mac: IMacFamily
}

export const Device = ({ mac }: DeviceProps) => {
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const dispatch = useDispatch()
  const macModelDict: IMacModelDict = macsArrayToDict(macs);
  const macModelIds: IMacModelId[] = getMacFamilyIds(macModelDict, mac);  
  const dates: Date[] = getDates(macModelIds, macModelDict).slice(0, 7);
  const daysSinceLastRelease = getDaysSinceLastRelease(dates[0]);
  const arrayDatesWithDiff = releasesDateInfo(dates);
  const { max } = getDatesMeta(arrayDatesWithDiff);
  
  const status = arrayDatesWithDiff.length > 0 ? getStatus(daysSinceLastRelease, max) : ProductStatus.neutral;
  const background = arrayDatesWithDiff.length > 0 ? ProductColorStatus[status] : ProductColorStatus[ProductStatus.neutral];
  
  function handleClick() {
    dispatch(setMacFamily(mac));
    dispatch(setStatus(status))
  }

 
  return (
    <li className={s.device} >
      <div className={s.link} onClick={handleClick}>
        <div className={s.wrapImg}>
          <img src={imgs[mac]} alt={imgs[mac]} className={s.img} />
        </div>
        <h4 className={s.title} >{mac}</h4>
      </div>
      <div className={s.status}>
        <div className={s.productBuyStatus}  style={{ background, border: `1px solid ${background}` }}>{getProductBuyStatus(status)}</div>
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
