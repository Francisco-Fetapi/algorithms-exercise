import { paranthesesIsValid } from "../exercises/paranthesesIsValid";

describe("All parantheses position are correct", () => {
  it("Should be running well", () => {
    expect(paranthesesIsValid("()")).toBe(true);
    expect(paranthesesIsValid("()[]{}")).toBe(true);
    expect(paranthesesIsValid("(]")).toBe(false);
    expect(paranthesesIsValid("([])")).toBe(true);
    expect(paranthesesIsValid("([{}])")).toBe(true);
    expect(paranthesesIsValid("([{])")).toBe(false);
  });
});
