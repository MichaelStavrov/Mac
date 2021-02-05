import { IReleaseDateInfo } from "./releasesDateInfo"

export interface IReleaseDatesMeta {
  max: number;
  average: number;
}

export function getDatesMeta(arrayDatesWithDiff: IReleaseDateInfo[]): IReleaseDatesMeta {
  if (arrayDatesWithDiff.length === 0) {
    return {max: 0, average: 0};
  }
  const average = Math.round(arrayDatesWithDiff.reduce((acc, el) => acc + el.diff, 0) / arrayDatesWithDiff.length);
  const diffs = arrayDatesWithDiff.map(obj => obj.diff);
  const max = Math.max(...diffs);
  return {max, average}
}