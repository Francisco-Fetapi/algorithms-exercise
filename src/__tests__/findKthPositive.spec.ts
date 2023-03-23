import { findKthPositive } from "../exercises/findKthPositive";

describe("Find Kth Positive Numbers", () => {
  it("Should be running well", () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });
});
