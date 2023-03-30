// Problem URL: https://leetcode.com/problems/plus-one

export function plusOne(digits: number[]): number[] {
  let digitsAsString = digits.map(String).join("");
  let digitsSummed = +digitsAsString + 1;
  let digitsAsNumber = String(digitsSummed).split("").map(Number);

  return digitsAsNumber;
}
