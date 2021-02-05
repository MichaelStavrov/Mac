export function parseDate(date: string): Date {
  const [d, m, y] = date.split('.').map(Number);  
  return new Date(y, m - 1, d);
}
