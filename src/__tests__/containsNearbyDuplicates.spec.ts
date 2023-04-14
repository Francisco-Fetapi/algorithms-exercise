import { containsNearbyDuplicates } from "../exercises/containsNearbyDuplicates";

describe("Check if the array contains nearby duplicates", () => {
  it("Should be working", () => {
    expect(containsNearbyDuplicates([1, 2, 3, 1], 3)).toBe(true);
    expect(containsNearbyDuplicates([1, 0, 0, 1], 1)).toBe(true);
    expect(containsNearbyDuplicates([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });
});
