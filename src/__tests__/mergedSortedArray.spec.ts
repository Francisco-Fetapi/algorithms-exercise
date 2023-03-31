import { mergedSortedArray } from "../exercises/mergedSortedArray";

describe("Merged Sorted Array", () => {
  it("Should be running well", () => {
    expect(mergedSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
      1, 2, 2, 3, 5, 6,
    ]);
    expect(mergedSortedArray([1], 1, [], 0)).toEqual([1]);
    expect(mergedSortedArray([0], 0, [1], 1)).toEqual([1]);
  });
});
