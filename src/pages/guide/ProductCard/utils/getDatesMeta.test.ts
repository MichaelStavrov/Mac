
import { getDatesMeta } from "./getDatesMeta"
// import { IReleaseDateInfo } from "./releasesDateInfo"

describe("getDatesMeta", () => {
  it("should return zeros when passed empty array", () => {    
    // expect(releasesDateInfo([])).toEqual([]);
    // const arr: IReleaseDateInfo[] = [];
    expect(getDatesMeta([])).toEqual({ max: 0, average: 0 });
  })

  it("should return correct result with inteher average", () => {
    const arr = [
      {date: new Date(), diff: 1},
      {date: new Date(), diff: 2},
      {date: new Date(), diff: 3}
    ];
    const result = getDatesMeta(arr);
    expect(result.average).toEqual(2);
    expect(result.max).toEqual(3);
  })

  it("should return correct result with non integer average", () => {
    const arr = [
      {date: new Date(), diff: 1},
      {date: new Date(), diff: 2},
      {date: new Date(), diff: 4}
    ];
    const result = getDatesMeta(arr);
    expect(result.average).toEqual(2);
    expect(result.max).toEqual(4);
  })
})
