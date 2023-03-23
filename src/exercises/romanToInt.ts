//Problem URL: https://leetcode.com/problems/roman-to-integer

type RomanSymbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";

export function romanToInt(s: string): number {
  const symbols: Record<RomanSymbol, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let lastValueAdded = null;

  for (let i = 0; i < s.length; i++) {
    const romanValue = s[i] as RomanSymbol;
    let currentValue = symbols[romanValue];
    if (!currentValue) {
      continue;
    }

    if (!lastValueAdded || lastValueAdded >= currentValue) {
      total += currentValue;
      lastValueAdded = currentValue;
    } else {
      total -= lastValueAdded;
      total += currentValue - lastValueAdded;
    }
  }

  return total;
}
