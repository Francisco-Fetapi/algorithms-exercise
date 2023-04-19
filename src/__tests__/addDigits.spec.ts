import { addDigits } from "../exercises/addDigits";

describe("Add each digits from a number", () => {
  it("Should be working", () => {
    expect(addDigits(38)).toBe(2);
    expect(addDigits(0)).toBe(0);
  });
});
