import iMac from "../../../img/imac_300.png"
import iMacPro from "../../../img/imac_pro_380.png"
import MacBookAir from "../../../img/macbook_air_470.png"
import MacBookPro13 from "../../../img/macbook_pro_13_350.png"
import MacBookPro16 from "../../../img/macbook_pro_16_372.png"
import MacMini from "../../../img/mac_mini_320.png"
import MacPro from "../../../img/mac_pro_2019_416.png"
import MacBook from "../../../img/macbook1.png"
import { IMacFamily } from "../../../types/macs";

export const imgs: { [key in IMacFamily]: string } = { 
  MacBook, 
  iMac, 
  "MacBook Air": MacBookAir, 
  "MacBook Pro 13": MacBookPro13, 
  "MacBook Pro 16": MacBookPro16, 
  "Mac mini": MacMini, 
  "iMac Pro": iMacPro, 
  "Mac Pro": MacPro
 } 
