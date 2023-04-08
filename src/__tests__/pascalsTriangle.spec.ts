import { pascalsTriangle } from "../exercises/pascalsTriangle";

describe("Show Pascal's Triangle", () => {
  it("Should be running well", () => {
    expect(pascalsTriangle(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
});
