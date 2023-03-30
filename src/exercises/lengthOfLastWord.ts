// Problem URL: https://leetcode.com/problems/length-of-last-word

export function lengthOfLastWord(str: string): number {
  let newStrArray = str.trim().split(" ");
  newStrArray = newStrArray.filter((str) => str !== " ");

  return newStrArray.at(-1)!.length;
}
