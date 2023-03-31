// Problem URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array

export function removeDuplicates(nums: Array<number | null>): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[j] = null;
      }
    }
  }

  //TODO: implement other algorithm to order instead bubble-sort

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] !== null && nums[j + 1] === null) {
        nums[j + 1] = nums[j];
        nums[j] = null;
      }
    }
  }

  const numbersAvailable = nums.filter((num) => num !== null);
  return numbersAvailable.length;
}
