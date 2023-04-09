export function singleOne(nums: number[]): number {
  let single = nums[0];
  let numbersCount: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    numbersCount[num] = (numbersCount[num] || 0) + 1;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numbersCount[num] === 1) {
      single = num;
      break;
    }
  }

  return single;
}
