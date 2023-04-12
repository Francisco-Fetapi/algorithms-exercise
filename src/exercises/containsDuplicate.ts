// Problem URL: https://leetcode.com/problems/contains-duplicate

export function containsDuplicate(nums: number[]): boolean {
  const numbersFrequency: Record<string, number> = {};

  nums.forEach((num) => {
    numbersFrequency[num] = (numbersFrequency[num] || 0) + 1;
  });

  const hasDuplicate = Object.values(numbersFrequency).some(
    (times) => times > 1
  );

  return hasDuplicate;
}
