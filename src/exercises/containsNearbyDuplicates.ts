// Problem URL: https://leetcode.com/problems/contains-duplicate-ii

export function containsNearbyDuplicates(nums: number[], k: number): boolean {
  const numbersFrequency: Record<string, number[] | undefined> = {};

  const hasNearbyDuplicates = nums.some((num, key) => {
    const selectedNumber = numbersFrequency[num];
    if (selectedNumber !== undefined) {
      selectedNumber.push(key);
      let key1 = selectedNumber.at(-2)!;
      let key2 = selectedNumber.at(-1)!;
      let isNearby = Math.abs(key1 - key2) <= k;

      if (isNearby) {
        return true;
      }
    } else {
      numbersFrequency[num] = [key];
    }
  });

  return hasNearbyDuplicates;
}

// The easiest version, but too complext in terms of complexity time.

// export function containsNearbyDuplicates(nums: number[], k: number): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const isNearby = Math.abs(i - j) <= k;
//       if (nums[i] === nums[j] && isNearby) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
