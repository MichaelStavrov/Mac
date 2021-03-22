import { IMacModel } from "../../../../types/macs";


export function getArrayOfMacsNamesSameYear(arrayMacsSameYear: IMacModel[]): string[] {
  const result = [];
  for (const mac of arrayMacsSameYear) {
    result.push(...mac.titles);
  }
  return result;
}