// Problem URL: https://leetcode.com/problems/isomorphic-strings

export function isomorphicStrings(s: string, t: string): boolean {
  const lettersFrequency: any = {
    s: {},
    t: {},
  };

  for (let i = 0; i < s.length; i++) {
    let strA = s[i];
    let strT = t[i];
    lettersFrequency.s[strA] = (lettersFrequency.s[strA] || 0) + 1;
    lettersFrequency.t[strT] = (lettersFrequency.t[strT] || 0) + 1;
  }

  let frequencyS = Object.values(lettersFrequency.s).toString();
  let frequencyT = Object.values(lettersFrequency.t).toString();

  return frequencyS === frequencyT;
}
