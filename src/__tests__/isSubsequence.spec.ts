import { isSubsequence } from "../exercises/isSubsequence";

describe("Check if the first string is a subsequence from another", () => {
  it("Should be working", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });
});
