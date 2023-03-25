/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Matrix <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

import {cursorTo} from "readline";

/**
 * LeetCode Problem:
 * 2319. Check if Matrix Is X-Matrix
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function checkXMatrix(grid: number[][]): boolean {
  let leftDiagonalIndex: number = 0;
  let rightDiagonalIndex: number = grid[0].length - 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let curPositionValue: number = grid[i][j];
      if (
        (leftDiagonalIndex === j && curPositionValue === 0) ||
        (rightDiagonalIndex === j && curPositionValue === 0)
      ) {
        return false;
      } else if (
        curPositionValue !== 0 &&
        j !== leftDiagonalIndex &&
        j !== rightDiagonalIndex
      )
        return false;
    }
    leftDiagonalIndex++;
    rightDiagonalIndex--;
  }
  return true;
}

/**
 * LeetCode Problem:
 * 867. Transpose Matrix
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function transpose(matrix: number[][]): number[][] {
  const transpose = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let row = [];
    for (let i = 0; i < matrix.length; i++) {
      row.push(matrix[i][j]);
    }
    transpose.push(row);
  }
  return transpose;
}

/**
 * LeetCode Problem:
 * 1275. Find Winner on a Tic Tac Toe Game
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function tictactoe(moves: number[][]): string {
  const board: string[][] = [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) board[moves[i][0]][moves[i][1]] = "A";
    else board[moves[i][0]][moves[i][1]] = "B";
  }
  const results = [];
  let leftDiagonalResults = [];
  let rightDiagonal = 2;
  let rightDiagonalResults = [];
  for (let i = 0; i < 3; i++) {
    let colsResults = [];
    for (let j = 0; j < 3; j++) {
      colsResults.push(board[j][i]);
    }
    results.push(colsResults);
    leftDiagonalResults.push(board[i][i]);
    rightDiagonalResults.push(board[i][rightDiagonal]);
    rightDiagonal--;
    results.push(board[i]);
  }
  results.push(rightDiagonalResults, leftDiagonalResults);
  for (let i = 0; i < results.length; i++) {
    let cur: string = results[i][0];
    let isWinner = true;
    for (let j = 1; j < 3; j++) {
      if (results[i][j] !== cur) {
        isWinner = false;
      }
    }
    if (isWinner && cur !== "0") return cur;
  }
  return moves.length >= 9 ? "Draw" : "Pending";
}

/**
 * LeetCode Problem:
 * 2500. Delete Greatest Value in Each Row
 * Time Complexity: O(n * m * log m)
 * Space Complexity: O(1)
 */
function deleteGreatestValue(grid: number[][]): number {
  for (const gridElement of grid) {
    gridElement.sort((a, b) => a - b);
  }
  let ans = 0;
  for (let j = 0; j < grid[0].length; j++) {
    let max = Number.MIN_VALUE;
    for (let k = 0; k < grid.length; k++) {
      if (max < grid[k][j]) max = grid[k][j];
    }
    ans += max;
  }
  return ans;
}



