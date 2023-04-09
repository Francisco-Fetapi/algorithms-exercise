import { singleOne } from "../exercises/singleOne";

describe("Find the unique element into array", () => {
  it("Should be working", () => {
    expect(singleOne([1, 2, 3, 2, 3])).toBe(1);
  });
});
