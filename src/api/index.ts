import { IMacModel } from "../types/macs";


export function fetchMacs(): Promise<IMacModel[]> {
  return fetch(`${process.env.PUBLIC_URL}/macs.json`, { method: "GET" }).then(r => r.json());
}
