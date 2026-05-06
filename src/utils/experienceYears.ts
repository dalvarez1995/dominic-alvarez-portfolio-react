const CAREER_START = new Date('2019-03-01');

export function getYearsOfExperience(start: Date = CAREER_START): number {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return Math.max(0, years);
}
