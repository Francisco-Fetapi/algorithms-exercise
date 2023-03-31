export function mySqrt(x: number): number {
  let maxResult = x / 2;
  for (let i = 1; i <= maxResult; i++) {
    let currentResult = i * i;
    let nextResult = (i + 1) * (i + 1);

    if (currentResult === x) {
      return i;
    } else if (nextResult > x) {
      return i;
    }
  }

  return 1;
}
