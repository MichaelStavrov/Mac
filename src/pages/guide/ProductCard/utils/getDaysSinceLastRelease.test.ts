import { getDaysSinceLastRelease } from "./getDaysSinceLastRelease"
import MockDate from 'mockdate';

describe("getDaysSinceLastRelease", () => {
  it("should return correct number of days when passed date", () => {
    MockDate.set("2021-02-03")
    expect(getDaysSinceLastRelease("10.11.2020")).toBe(85);
  })
})
MockDate.reset() 
