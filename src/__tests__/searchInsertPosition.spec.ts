import { searchInsertPosition } from "../exercises/searchInsertPosition";

describe("Find the position of value in O(log n) time complexity", () => {
  it("Should be running well", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsertPosition([-3, -1, 1, 3, 5, 6], -2)).toBe(1);
  });
});
