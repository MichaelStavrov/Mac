import iMac from "../../../img/imac_300.png"
import iMacPro from "../../../img/imac_pro_380.png"
import MacBookAir from "../../../img/macbook_air_470.png"
import MacBookPro13 from "../../../img/macbook_pro_13_350.png"
import MacBookPro16 from "../../../img/macbook_pro_16_372.png"
import Macmini from "../../../img/mac_mini_320.png"
import MacPro from "../../../img/mac_pro_2019_416.png"
import MacBook from "../../../img/macbook1.png"
import { IMacFamily } from "../../../types/macs";

// export const imgs: string[] = [MacBook, iMac, MacBookAir, MacBookPro13, MacBookPro16, MacMini, iMacPro, MacPro];

export const imgs: { [key in string]: string } = { MacBook, iMac, MacBookAir, MacBookPro13, MacBookPro16, Macmini, iMacPro, MacPro } 



export function getImg(imgs: { [key in string]: string }, macFamily: IMacFamily): string {  
  const key = macFamily.split("").filter(x => x !== " ").join('')
  // const transformMacFamily = macFamily.toLowerCase().replace(/[" "]/gi, "_");  
  // const img = imgs.find(family => family.includes(transformMacFamily));
  return imgs[key] || "";
}