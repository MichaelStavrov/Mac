import { IMacModel, IMacModelSortByYear} from "../../../types/macs";


export function macsModelSortByYear(macs: IMacModel[]): IMacModelSortByYear {
  const result: IMacModelSortByYear = {};
  for (const mac of macs) {
    // const year = new Date(mac.intro).getFullYear();
    const year = mac.intro.slice(0, 4);
    if (year in result) {
      result[year].push(mac);
    } else {
      result[year] = [mac];
    }
  }
  return result
}
