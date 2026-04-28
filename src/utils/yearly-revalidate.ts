export function secondsUntilNewYear(): number {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);
  return Math.floor((nextYear.getTime() - now.getTime()) / 1000);
}