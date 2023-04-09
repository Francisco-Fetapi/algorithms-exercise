// Problem URL: https://leetcode.com/problems/valid-palindrome

export function validPalindrome(s: string): boolean {
  let formattedStr = s.replace(/[^\w]/gi, "").toLowerCase();
  let strOnArray = formattedStr.split("");

  let strReversed = strOnArray.reverse().join("");

  return formattedStr === strReversed;
}
