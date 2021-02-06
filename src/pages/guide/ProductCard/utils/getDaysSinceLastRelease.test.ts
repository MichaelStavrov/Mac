import { getDaysSinceLastRelease } from "./getDaysSinceLastRelease"
import { parseDate } from "./parseDate"
import MockDate from 'mockdate';

describe("getDaysSinceLastRelease", () => {
  it("should return correct number of days when passed date", () => {
    // MockDate.set("2021-02-03")
    // const mockDate = new Date().toString()
    
    const result = Math.floor((+new Date() - +parseDate("10.11.2020")) / (1000*60*60*24));
    expect(getDaysSinceLastRelease("10.11.2020")).toBe(result);
  })
})

MockDate.reset() 