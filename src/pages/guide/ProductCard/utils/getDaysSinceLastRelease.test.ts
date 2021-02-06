import { getDaysSinceLastRelease } from "./getDaysSinceLastRelease"
import { parseDate } from "./parseDate"


describe("getDaysSinceLastRelease", () => {
  it("should return correct number of days when passed array size 2", () => {
    const array = ["03.02.2021", "03.01.2021"]
    const result = Math.floor((+new Date() - +parseDate(array[0])) / (1000*60*60*24));
    expect(getDaysSinceLastRelease(array[0])).toBe(result);
  })
})


