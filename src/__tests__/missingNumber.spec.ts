import { missingNumber } from "../exercises/missingNumber";

describe("Find out the missing number in a range of numbers", () => {
  it("Should be working", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
    expect(missingNumber([0, 1])).toBe(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
});
