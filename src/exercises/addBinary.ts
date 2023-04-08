// Problem URL: https://leetcode.com/problems/add-binary

//  // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number

export function addBinary(a: string, b: string): string {
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);

  return sum.toString(2);
}
