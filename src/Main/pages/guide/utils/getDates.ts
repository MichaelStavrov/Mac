import { IMacModelId, IMacModelDict } from "../../../../types/macs"

export function getDates(macModelIds: IMacModelId[], macModelDict: IMacModelDict): Date[] {
  const dates: string[] = [];
  for (const model of macModelIds) {
    if (model in macModelDict) {
      if (!dates.includes(macModelDict[model].intro)) {
        dates.push(macModelDict[model].intro);
      }
    }
  }
  // for (const mac of macs) {
  //   if (mac.titles[0].includes(MAC_FAMILIES[0])) {
  //     if (!dates.includes(mac.intro)) {
  //       dates.push(mac.intro);
  //     }     
  //   }
  // }
  return dates.map(date => new Date(date)).sort((a, b) => +b - +a);
}