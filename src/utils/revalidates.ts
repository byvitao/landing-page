export function revalidateNewYear(): number {
  const now = new Date();
  const nextYear = new Date(now.getFullYear() + 1, 0, 1); // primeiro de janeiro do próximo ano
  return Math.floor((nextYear.getTime() - now.getTime()) / 1000);
}

export function revalidateMidNight(): number {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // amanhã à meia-noite
  return Math.floor((nextMidnight.getTime() - now.getTime()) / 1000);
}