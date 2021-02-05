import { getStringDateAndMonth } from "./getStringDateAndMonth"
import { parseDate } from "./parseDate";

describe("getStringDateAndMonth", () => {
  it("should return correct string when passed date", () => {
    const date = parseDate("05.02.2021")
    expect(getStringDateAndMonth(date)).toBe("Feb 2021");
  })
})