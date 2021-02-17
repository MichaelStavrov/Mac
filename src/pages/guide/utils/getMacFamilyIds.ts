import { IMacFamily, IMacModelDict, IMacModelId } from "../../../types/macs"

export function getMacFamilyIds(macs: IMacModelDict, family: IMacFamily): IMacModelId[] {  
  return Object.values(macs)
    .filter(mac => {
      const title = mac.titles[0];
      if (family === "MacBook Pro 16") {
        return title.includes(family) || title.includes("MacBook Pro 15")
      }
      if (family === "MacBook") {
        return title.includes("MacBook &quot")
      }
      return title.includes(family);
    })
    .map(mac => mac.model);
}