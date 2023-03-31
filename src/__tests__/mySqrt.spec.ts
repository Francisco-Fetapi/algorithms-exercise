import { mySqrt } from "../exercises/mySqrt";

describe("Calculte Square Root from a number manually", () => {
  it("Should be running well", () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(10)).toBe(3);
    expect(mySqrt(12)).toBe(3);
    expect(mySqrt(16)).toBe(4);
    expect(mySqrt(15)).toBe(3);
  });
});
