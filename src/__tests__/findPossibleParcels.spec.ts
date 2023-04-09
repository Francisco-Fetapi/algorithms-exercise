import { findPossibleParcels } from "../exercises/findPossibleParcels";

describe("Find possible parcels", () => {
  it("Should be runnint", () => {
    expect(findPossibleParcels([12, 3, 4, 8, 9], 20)).toBe(true);
    expect(findPossibleParcels([12, 3, 4, 8, 9], 22)).toBe(false);
    expect(findPossibleParcels([12, 3, 4, 8, 9, -2], 10)).toBe(true);
  });
});
