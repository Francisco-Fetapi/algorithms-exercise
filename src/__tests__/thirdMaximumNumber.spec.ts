import { thirdMaximumNumber } from "../exercises/thirdMaximumNumber";

describe("Figure out the third maximum number", () => {
  it("Should be running well", () => {
    expect(thirdMaximumNumber([1, 2, 3])).toBe(1);
    expect(thirdMaximumNumber([1, 2])).toBe(2);
    expect(thirdMaximumNumber([2, 2, 3, 1])).toBe(1);
  });
});
