import { removeElement } from "../exercises/removeElement";

describe("Remove Element from array and re-order", () => {
  it("Should be running well", () => {
    expect(removeElement([1, 1, 2, 3, 4, 4, 4, 5, 6, 6], 4)).toBe(7);
    expect(removeElement([1, 1, 2, 3, 4, 4, 4, 5, 6, 6], 1)).toBe(8);
    expect(removeElement([1, 1, 2, 3, 4, 4, 4, 5, 6, 6], 2)).toBe(9);
  });
});
