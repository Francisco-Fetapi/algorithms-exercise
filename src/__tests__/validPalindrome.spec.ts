import { validPalindrome } from "../exercises/validPalindrome";

describe("FInd out if the word is a palindrom", () => {
  it("Should be working", () => {
    expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(validPalindrome("race a car")).toBe(false);
    expect(validPalindrome("")).toBe(true);
  });
});
