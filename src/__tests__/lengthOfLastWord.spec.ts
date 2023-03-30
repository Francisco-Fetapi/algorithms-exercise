import { lengthOfLastWord } from "../exercises/lengthOfLastWord";

describe("Find out the length of last word", () => {
  it("Should be running well", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
