// Problem URL: https://leetcode.com/problems/third-maximum-number

export function thirdMaximumNumber(nums: number[]): number {
  if (nums.length < 3) {
    return Math.max(...nums);
  }

  nums.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;

    return 0;
  });

  const [, , thirdMaximum] = new Set(nums);

  return thirdMaximum;
}
