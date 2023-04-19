// Problem URL: https://leetcode.com/problems/is-subsequence

export function isSubsequence(s: string, t: string): boolean {
  let countFindedMatch = 0;
  let isSub = false;

  for (let i = 0; i < t.length; i++) {
    let letterToFind = s[countFindedMatch];
    let letterFinded = t[i];

    if (letterFinded === letterToFind) {
      countFindedMatch++;
    }
    if (countFindedMatch === s.length) {
      isSub = true;
      break;
    }
  }

  return isSub;
}
