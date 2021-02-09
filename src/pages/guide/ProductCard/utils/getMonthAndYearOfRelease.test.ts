import { getMonthAndYearOfRelease } from "./getMonthAndYearOfRelease"
import { parseDate } from "./parseDate";

describe("getMonthAndYearOfRelease", () => {
  it("should return correct string when passed date", () => {
    const date = parseDate("05.01.2021")
    expect(getMonthAndYearOfRelease(date)).toBe("Jan 2021");
  })
})