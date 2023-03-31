// Problem URL: https://leetcode.com/problems/remove-element

export function removeElement(nums: Array<number | null>, val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
    }
  }

  //   TODO: improve algorithm to order, instead use bubble-sort use another.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] !== null && nums[j + 1] === null) {
        nums[j + 1] = nums[j];
        nums[j] = null;
      }
    }
  }

  const validValues = nums.filter((num) => num !== null);

  return validValues.length;
}
