// Problem URL: https://leetcode.com/problems/number-of-segments-in-a-string

export function countSegments(s: string): number {
  return s.split(" ").length;
}
