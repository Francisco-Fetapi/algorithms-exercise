// Problem URL: https://leetcode.com/problems/check-if-it-is-a-straight-line

export function makeStraightLine(coordinate: number[][]): boolean {
  return coordinate.every((xy) => xy[1] - xy[0] == 1);
}
