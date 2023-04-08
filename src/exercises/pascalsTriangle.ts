// Problem URL: https://leetcode.com/problems/pascals-triangle

export function pascalsTriangle(numsRows: number): number[][] {
  const triangle = [[1], [1, 1]];

  for (let i = 2; i < numsRows; i++) {
    let newLine = new Array(i + 1).fill(1);
    let previousLine = triangle[i - 1];

    if (!previousLine) break;

    for (let j = 0; j < previousLine.length - 1; j++) {
      let current = previousLine[j];
      let next = previousLine[j + 1];

      if (!next) break;
      newLine[j + 1] = current + next;
    }
    triangle.push(newLine);
  }

  console.log(triangle);

  return triangle;
}
