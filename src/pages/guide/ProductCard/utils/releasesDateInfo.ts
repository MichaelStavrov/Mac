import { parseDate } from "./parseDate"

export interface IReleaseDateInfo {
  date: Date;
  diff: number;
}

export function releasesDateInfo(dates: string[]): IReleaseDateInfo[] {
  const result = [];
  for (let i = 0; i < dates.length - 1; i++) {
    const prevDate = parseDate(dates[i]);
    const currentDate = parseDate(dates[i + 1]);
    const diff = Math.round((+prevDate - +currentDate) / (1000*60*60*24));
    result.push({date: currentDate, diff: diff});
  } 
  return result;
}