import { uglyNumber } from "../exercises/uglyNumber";

describe("Find out if some number is only divided by 2, 3 and 5", () => {
  it("Should be working", () => {
    expect(uglyNumber(6)).toBe(true);
    expect(uglyNumber(1)).toBe(true);
    expect(uglyNumber(14)).toBe(false);
  });
});
