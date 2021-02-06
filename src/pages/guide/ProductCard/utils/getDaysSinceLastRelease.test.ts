import { getDaysSinceLastRelease } from "./getDaysSinceLastRelease"
import { parseDate } from "./parseDate"


describe("getDaysSinceLastRelease", () => {
  it("should return correct number of days when passed array size 2", () => {
    const array = ["03.02.2021", "03.01.2021"]
    const result = Math.floor((+new Date() - +parseDate(array[0])) / (1000*60*60*24));
    expect(getDaysSinceLastRelease(array[0])).toBe(result);
  })
})


var MockDate = require('mockdate');
// // I use a timestamp to make sure the date stays fixed to the ms
// MockDate.set(1434319925275);
// // test code here
// // reset to native Date()
// MockDate.reset();