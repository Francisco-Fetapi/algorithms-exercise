// Problem URL: https://leetcode.com/problems/merge-sorted-array/description/

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function mergedSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  for (let i = 0, j = 0; i < m || j < n; i++) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[j];
      j++;
    }
  }

  //   nums1.sort();

  //   TODO: bubble sort,not, use other algorithm instead.
  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }

  return nums1;
}
