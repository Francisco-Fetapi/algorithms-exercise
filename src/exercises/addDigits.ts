// Problem URL: https://leetcode.com/problems/add-digits/

export function addDigits(num: number): number {
  if (num < 10) return num;

  let nums = num
    .toString()
    .split("")
    .reduce((prev, curr) => {
      return +prev + +curr;
    }, 0);

  return addDigits(nums);
}
