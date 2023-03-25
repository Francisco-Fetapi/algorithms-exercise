import { removeDuplicates } from "../exercises/removeDuplicates";

describe("Remove duplicate numbers", () => {
  it("Should be running well", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
