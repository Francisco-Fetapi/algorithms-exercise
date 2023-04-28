import { countSegments } from "../exercises/countSegments";

describe("Figure out the number of segments in a string", () => {
  it("Should be running well", () => {
    expect(countSegments("Hello, my name is John")).toBe(5);
    expect(countSegments("Hello")).toBe(1);
  });
});
