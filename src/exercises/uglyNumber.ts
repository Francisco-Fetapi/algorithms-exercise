export function uglyNumber(n: number): boolean {
  const acceptedDivisors = [2, 3, 5];

  if (n < 0) return false;

  for (let i = 4; i <= Math.ceil(n / 2); i++) {
    if (!acceptedDivisors.includes(i)) {
      const isDivisor = n % i === 0;

      if (isDivisor) {
        return false;
      }
    }
  }

  return true;
}
