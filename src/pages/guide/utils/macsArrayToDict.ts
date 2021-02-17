import { IMacModel, IMacModelDict } from "../../../types/macs"

export function macsArrayToDict(macs: IMacModel[]): IMacModelDict {
  const result: IMacModelDict = {};
  for (const mac of macs) {
    result[mac.model] = mac;
  }
  return result;
}