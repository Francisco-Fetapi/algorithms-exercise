import { powerOfTwo } from "../exercises/powerOfTwo";

describe("Check if the number is a power of two", () => {
  it("Should be working", () => {
    expect(powerOfTwo(1)).toBe(true);
    expect(powerOfTwo(16)).toBe(true);
    expect(powerOfTwo(3)).toBe(false);
  });
});
