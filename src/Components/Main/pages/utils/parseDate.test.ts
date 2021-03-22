import { parseDate } from "./parseDate";

//JEST

describe("parseDate", () => {
  it("should return correct date", () => {
    const result = parseDate("12.07.2009").getTime();
    const expected = new Date(2009, 6, 12).getTime();
    
    expect(result).toBe(expected);
  })
})