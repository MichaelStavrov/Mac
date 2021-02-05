

export function getStringDateAndMonth(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${months[month]} ${year}`
}