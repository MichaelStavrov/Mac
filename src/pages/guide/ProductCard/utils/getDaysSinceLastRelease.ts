import { parseDate } from "./parseDate"
// new Date()
// как замокать new Date в тестах

// jest mock date

export function getDaysSinceLastRelease(date: string): number {
  // console.log(new Date())
  // console.log(date)
  return Math.floor((+new Date() - +parseDate(date)) / (1000*60*60*24));
}

