// Problem URL: https://leetcode.com/problems/happy-number

export function happyNumber(n: number): boolean {
  if (n < 10) return false;
  let currentResult: number = n;
  let pieceOfNumber = currentResult.toString().split("").map(Number);

  console.log("list", currentResult.toString().split(""));

  while (pieceOfNumber.length > 1) {
    currentResult = pieceOfNumber.reduce((acc, act) => {
      return acc + act ** 2;
    }, 0);
    pieceOfNumber = currentResult.toString().split("").map(Number);
  }

  return currentResult === 1;
}
