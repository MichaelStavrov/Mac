import { getDates } from "../utils/getDates"

const macModelDict = {
  "A2179 (EMC 3302)": {
    "intro": "2020-03-18T00:00:00.000Z",
    "disc": "2020-11-10T00:00:00.000Z",
    "model": "A2179 (EMC 3302)",
    "family": "2020**",
    "titles": [
      "MacBook Air &quot;Core i3&quot; 1.1 13&quot; (Scissor, 2020)",
      "MacBook Air &quot;Core i5&quot; 1.1 13&quot; (Scissor, 2020)",
      "MacBook Air &quot;Core i7&quot; 1.2 13&quot; (Scissor, 2020)"
    ]
  },
  "A2115 (EMC 3442)": {
    "intro": "2020-08-04T00:00:00.000Z",
    "disc": "N/A",
    "model": "A2115 (EMC 3442)",
    "family": "Retina 5K, 27-Inch, 2020",
    "titles": [
      "iMac 27-Inch &quot;Core i5&quot; 3.1 (5K, 2020)",
      "iMac 27-Inch &quot;Core i5&quot; 3.3 (5K, 2020)",
      "iMac 27-Inch &quot;Core i7&quot; 3.8 (5K, 2020)",
      "iMac 27-Inch &quot;Core i9&quot; 3.6 (5K, 2020)",
      "iMac 27-Inch &quot;Core i7&quot; 3.8 (5K, 2020; 5700/XT)",
      "iMac 27-Inch &quot;Core i9&quot; 3.6 (5K, 2020; 5700/XT)"
    ]
  }
}

describe("getDates", () => {
  it("should return empty array when passed array with length equals 1", () => {
    expect(getDates(["A2179 (EMC 3302)"], macModelDict)).toEqual([new Date("2020-03-18T00:00:00.000Z")])
  })

  it("should return correct array with size 2", () => {
    expect(getDates(["A2179 (EMC 3302)", "A2115 (EMC 3442)"], macModelDict)).toEqual([new Date("2020-08-04T00:00:00.000Z"), new Date("2020-03-18T00:00:00.000Z")])
  })
})



