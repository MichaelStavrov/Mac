import {releasesDateInfo} from "./releasesDateInfo"

describe("releasesDateInfo", () => {
  it("should return empty array when passed empty array of dates", () => {    
    expect(releasesDateInfo([])).toHaveLength(0);
  })

  it("should return empty array when passed array with length equals 1", () => {    
    expect(releasesDateInfo(["30.01.2020"])).toHaveLength(0);
  })

  it("should return correct array with non empty array with size 2", () => {
    const dates = ["30.01.2020", "20.01.2020"];
    const result = releasesDateInfo(dates);
    
    expect(result).toHaveLength(1);
    
    expect(result[0].date.getTime()).toEqual(new Date(2020, 0, 20).getTime());
    expect(result[0].diff).toEqual(10);
  })

  it("should return correct array with non empty array with size 3", () => {
    const dates = ["30.01.2020", "20.01.2020", "05.01.2020"];
    const result = releasesDateInfo(dates);
    
    expect(result).toHaveLength(2);
    
    expect(result[0].date.getTime()).toEqual(new Date(2020, 0, 20).getTime());
    expect(result[0].diff).toEqual(10);
    
    expect(result[1].date.getTime()).toEqual(new Date(2020, 0, 5).getTime());
    expect(result[1].diff).toEqual(15);
  })
})