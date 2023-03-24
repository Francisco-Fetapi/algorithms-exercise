import { longestCommonPrefix } from "../exercises/longestCommonPrefix";

describe("Find the longest common prefix", () => {
  it("Should be running well", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(longestCommonPrefix(["elloi", "eloo", "elai"])).toBe("el");
  });
});
