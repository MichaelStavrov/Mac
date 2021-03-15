import { IMacModel } from "../types/macs";


export function fetchMacs(): Promise<IMacModel[]> {
  return fetch('/macs.json', { method: "GET" }).then(r => r.json());
}