

export function getDaysSinceLastRelease(date: Date): number {
  return Math.floor((+new Date() - +date) / (1000*60*60*24));
}

