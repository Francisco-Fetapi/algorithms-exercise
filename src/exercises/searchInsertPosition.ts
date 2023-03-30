// Problem URL: https://leetcode.com/problems/search-insert-position

export function searchInsertPosition(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (true) {
    let middle = Math.floor(start + (end - start) / 2);

    if (nums[middle] > target) {
      end = middle - 1;
    } else if (nums[middle] < target) {
      start = middle + 1;
    }

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] + 1 === target) {
      return middle + 1;
    } else if (nums[middle] - 1 === target) {
      return middle;
    }

    console.log("Testing time complexity...", nums, target, middle);
  }
}
