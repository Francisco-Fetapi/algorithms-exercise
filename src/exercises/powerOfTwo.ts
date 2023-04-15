// Problem URL: https://leetcode.com/problems/power-of-two

export function powerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  let logN2 = Math.log2(n);

  //   it is not a decimal number
  return !logN2.toString().includes(".");
}
