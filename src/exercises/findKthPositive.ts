//Problem URL: https://leetcode.com/problems/kth-missing-positive-number

export function findKthPositive(arr: number[], k: number): number {
  const missingPositiveIntegers = [];
  let i = 1;
  let missingValue = null;
  while (true) {
    if (!arr.includes(i)) {
      missingPositiveIntegers.push(i);
    }
    missingValue = missingPositiveIntegers[k - 1];
    if (missingValue) {
      break;
    }
    i++;
  }

  return missingValue;
}
