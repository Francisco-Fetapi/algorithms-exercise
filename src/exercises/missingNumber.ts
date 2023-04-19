// Problem URL: https://leetcode.com/problems/missing-number

export function missingNumber(nums: number[]): number {
  nums.sort();

  //   TODO: solve with o(n) time complexity, use insertion sort only.
  for (let i = 0; i < nums.length - 1; i++) {
    let current = nums[i];
    let next = nums[i + 1];
    let whatNextShouldBe = current + 1;

    if (next > whatNextShouldBe) {
      return whatNextShouldBe;
    }
  }

  return nums.length;
}
