

export interface IReleaseDateInfo {
  date: Date;
  diff: number;
}

export function releasesDateInfo(dates: Date[]): IReleaseDateInfo[] {
  const result = [];
  for (let i = 0; i < dates.length - 1; i++) {
    const prevDate = dates[i];
    const currentDate = dates[i + 1];
    const diff = Math.round((+prevDate - +currentDate) / (1000*60*60*24));
    result.push({date: currentDate, diff: diff});
  } 
  return result;
}