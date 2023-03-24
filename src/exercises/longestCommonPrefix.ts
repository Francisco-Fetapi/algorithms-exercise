export function longestCommonPrefix(strs: string[]): string {
  let commonPrefixes = "";

  for (let i = 0; i < strs.length; i++) {
    let currentPrefix = strs[0][i];
    let allWordsHavePrefix = strs.every((str) => str[i] === currentPrefix);
    if (allWordsHavePrefix) {
      commonPrefixes += currentPrefix;
    } else {
      break;
    }
  }

  return commonPrefixes;
}
