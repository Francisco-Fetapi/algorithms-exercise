// Problem URL: https://leetcode.com/problems/power-of-two

/*
// My first implementation
export function powerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  let logN2 = Math.log2(n);

  //   it is not a decimal number
  return !logN2.toString().includes(".");
} */

export function powerOfTwo(n: number): boolean {
  if (n % 2 === 0) {
    return powerOfTwo(n / 2);
  }

  if (n <= 0) return false;
  else if (n === 1) return true;

  return false;
}
