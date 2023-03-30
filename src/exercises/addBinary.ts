// Problem URL: https://leetcode.com/problems/add-binary

export function addBinary(a: string, b: string): string {
  let numberADecimal = parseInt(a, 2);
  let numberBDecimal = parseInt(b, 2);
  let resultDecimal = numberADecimal + numberBDecimal;
  let resultBinary = resultDecimal.toString(2);

  return resultBinary;
}
