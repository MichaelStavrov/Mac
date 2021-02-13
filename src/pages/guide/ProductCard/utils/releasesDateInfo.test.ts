import {releasesDateInfo} from "./releasesDateInfo"

describe("releasesDateInfo", () => {
  it("should return empty array when passed empty array of dates", () => {    
    expect(releasesDateInfo([])).toHaveLength(0);
  })

  it("should return empty array when passed array with length equals 1", () => {    
    expect(releasesDateInfo([new Date(2020, 0, 30)])).toHaveLength(0);
  })

  it("should return correct array with non empty array with size 2", () => {
    const dates = [new Date(2020, 0, 30), new Date(2020, 0, 20)];
    const result = releasesDateInfo(dates);
    
    expect(result).toHaveLength(1);
    
    expect(result[0].date.getTime()).toEqual(new Date(2020, 0, 20).getTime());
    expect(result[0].diff).toEqual(10);
  })

  it("should return correct array with non empty array with size 3", () => {
    const dates = [new Date(2020, 0, 30), new Date(2020, 0, 20), new Date(2020, 0, 5)];
    const result = releasesDateInfo(dates);
    
    expect(result).toHaveLength(2);
    
    expect(result[0].date.getTime()).toEqual(new Date(2020, 0, 20).getTime());
    expect(result[0].diff).toEqual(10);
    
    expect(result[1].date.getTime()).toEqual(new Date(2020, 0, 5).getTime());
    expect(result[1].diff).toEqual(15);
  })
})