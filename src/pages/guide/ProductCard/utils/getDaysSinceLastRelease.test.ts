import { getDaysSinceLastRelease } from "./getDaysSinceLastRelease"
import MockDate from 'mockdate';

// https://stackoverflow.com/questions/29719631/how-do-i-set-a-mock-date-in-jest
// https://stackoverflow.com/questions/28504545/how-to-mock-a-constructor-like-new-date/



describe("getDaysSinceLastRelease", () => {
  it("should return correct number of days when passed date", () => {
    // const mockDate = new Date(2021, 1, 3);
    // jest
    //   .spyOn(global, 'Date')
    //   .mockImplementation(() => mockDate as any)
      // .mockReturnValue(mockDate as any)
    MockDate.set("2021-02-03")
    expect(getDaysSinceLastRelease("10.11.2020")).toBe(85);
  })
})
MockDate.reset() 
