import { matched, tictactoe } from "../exercises/tictactoe";

describe("Tic Toc Toe", () => {
  it("Should be working", () => {
    expect(
      tictactoe([
        [0, 0],
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2],
      ])
    ).toBe("A");
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0],
      ])
    ).toBe("B");
    expect(
      tictactoe([
        [0, 0],
        [1, 1],
        [2, 0],
        [1, 0],
        [1, 2],
        [2, 1],
        [0, 1],
        [0, 2],
        [2, 2],
      ])
    ).toBe("Draw");
  });
  it("Should be working", () => {
    let res1 = matched([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
    let res2 = matched([
      [0, 0],
      [0, 1],
      [0, 0],
    ]);

    expect(res1).toBe(true);
    expect(res2).toBe(false);
  });
});
