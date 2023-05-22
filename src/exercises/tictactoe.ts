// Problem URL: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game

type TicTacResult = "A" | "B" | "Draw" | "Pending";

const SEQUENCES_WINNING = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
];

export function matched(mySequences: number[]) {
  return SEQUENCES_WINNING.some((sequence) => {
    return sequence.every((elem) => mySequences.includes(elem));
  });
}

export function tictactoe(moves: number[][]): TicTacResult {
  const aMoves: number[] = [];
  const bMoves: number[] = [];

  if (moves.length < 5) {
    return "Pending";
  }

  moves.forEach((move, key) => {
    const [row, col] = move;
    const flatArray = row * 3 + col;
    if (key % 2 == 0) {
      aMoves.push(flatArray);
    } else {
      bMoves.push(flatArray);
    }
  });

  if (matched(aMoves)) {
    return "A";
  }
  if (matched(bMoves)) {
    return "B";
  }

  return "Draw";
}
