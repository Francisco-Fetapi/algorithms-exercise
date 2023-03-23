import { romanToInt } from "../exercises/romanToInt";

describe("Convert Roman Numbers to Int", () => {
  it("Should be running well", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
