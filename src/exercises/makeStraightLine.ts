export function makeStraightLine(coordinate: number[][]): boolean {
  return coordinate.every((xy) => xy[1] - xy[0] == 1);
}
