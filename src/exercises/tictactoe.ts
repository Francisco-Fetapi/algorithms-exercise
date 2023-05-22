// Problem URL: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game

type TicTacResult = "A" | "B" | "Draw";

const sequencesWinning = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

export function matched(mySequences: number[][]) {
  return sequencesWinning.some((sequence1) => {
    return sequence1.every((sequence2) => {
      return mySequences.some((item) => {
        return item[0] === sequence2[0] && item[1] === sequence2[1];
      });
    });
  });
}

export function tictactoe(moves: number[][]): TicTacResult {
  const aSequences = moves.filter((_, k) => k % 2 === 0);
  const bSequences = moves.filter((_, k) => k % 2 !== 0);

  if (matched(aSequences)) return "A";
  if (matched(bSequences)) return "B";

  return "Draw";
}
