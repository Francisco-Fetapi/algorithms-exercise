// Problem URL: https://leetcode.com/problems/number-of-days-between-two-dates

export function daysBetweenDates(date1: string, date2: string): number {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  let countDays = 0;

  while (firstDate.toDateString() !== secondDate.toDateString()) {
    if (firstDate < secondDate) {
      firstDate.setDate(firstDate.getDate() + 1);
    } else {
      secondDate.setDate(secondDate.getDate() + 1);
    }
    countDays++;
  }

  return countDays;
}
