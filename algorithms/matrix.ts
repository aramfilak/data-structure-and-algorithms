/**
 * LeetCode Problem (Easy):
 * 1572. Matrix Diagonal Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @format
 */

function diagonalSum(mat: number[][]): number {
  let sum: number = 0;
  for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
    sum += mat[i][i];
    if (i !== j) sum += mat[i][j];
  }
  return sum;
}

/**
 * LeetCode Problem (Easy):
 * 2319. Check if Matrix Is X-Matrix
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function checkXMatrix(grid: number[][]): boolean {
  const size = grid.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const isDiagonal = j === i || j === size - i - 1;
      const currentElement = grid[i][j];

      if (isDiagonal ? currentElement === 0 : currentElement !== 0) {
        return false;
      }
    }
  }
  return true;
}

/**
 * LeetCode Problem (Easy):
 * 867. Transpose Matrix
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function tictactoe(moves: number[][]): string {
  const board: string[][] = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0'],
  ];
  for (let i: number = 0; i < moves.length; i++) {
    if (i % 2 === 0) board[moves[i][0]][moves[i][1]] = 'A';
    else board[moves[i][0]][moves[i][1]] = 'B';
  }
  const results: string[][] = [];
  let leftDiagonalResults: string[] = [];
  let rightDiagonal: number = 2;
  let rightDiagonalResults: string[] = [];
  for (let i: number = 0; i < 3; i++) {
    let colsResults: string[] = [];
    for (let j: number = 0; j < 3; j++) {
      colsResults.push(board[j][i]);
    }
    results.push(colsResults);
    leftDiagonalResults.push(board[i][i]);
    rightDiagonalResults.push(board[i][rightDiagonal]);
    rightDiagonal--;
    results.push(board[i]);
  }
  results.push(rightDiagonalResults, leftDiagonalResults);
  for (let i: number = 0; i < results.length; i++) {
    let cur: string = results[i][0];
    let isWinner: boolean = true;
    for (let j: number = 1; j < 3; j++) {
      if (results[i][j] !== cur) {
        isWinner = false;
      }
    }
    if (isWinner && cur !== '0') return cur;
  }
  return moves.length >= 9 ? 'Draw' : 'Pending';
}

/**
 * LeetCode Problem (Easy):
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

/**
 * LeetCode Problem (Easy):
 * 566. Reshape the Matrix
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (mat.length * mat[0].length !== c * r) return mat;
  let m = 0,
    row: number[] = [],
    ans: number[][] = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      row[m] = mat[i][j];
      m++;
      if (m === c) {
        ans.push(row);
        row = [];
        m = 0;
      }
    }
  }
  return ans;
}

/**
 * LeetCode Problem (Medium):
 * 54. Spiral Matrix
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 */
function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [],
    visited: Set<string> = new Set<string>(),
    directionQueue = [
      [0, 1], // right
      [1, 0], // bottom
      [0, -1], // left
      [-1, 0], //top
    ];

  let lastPosition = [0, -1];
  let matrixElements = matrix.length * matrix[0].length;

  while (true) {
    let direction: number[] = directionQueue.shift()!;
    lastPosition[0] += direction[0];
    lastPosition[1] += direction[1];
    lastPosition = drive(lastPosition, direction!);
    if (ans.length === matrixElements) break;
    directionQueue.push(direction!);
  }

  return ans;

  function drive(lastPosition: number[], direction: number[]): number[] {
    const yDir = direction[0];
    const xDir = direction[1];
    for (
      let i = lastPosition[0], j = lastPosition[1];
      i < matrix.length && i > -1 && j < matrix[i].length && j > -1;
      i += yDir, j += xDir
    ) {
      const key = `${i}+${j}`;
      if (visited.has(key)) break;
      lastPosition = [i, j];
      ans.push(matrix[i][j]);
      visited.add(key);
    }

    return lastPosition;
  }
}

/**
 * LeetCode Problem (Medium):
 * 766. Toeplitz Matrix
 * Time Complexity: O(m*n)
 * Space Complexity: O(1)
 */
function isToeplitzMatrix(matrix: number[][]): boolean {
  const diagonalIsSame = (matrix: number[][], row: number, col: number): boolean => {
    //is movable diagonally right bottom
    while (row + 1 < matrix.length && col + 1 < matrix[row].length) {
      // previous cell is equal to current cell
      if (matrix[row][col] !== matrix[row + 1][col + 1]) {
        return false;
      }
      col++;
      row++;
    }

    return true;
  };
  // Start from the bottom left corner
  let row = matrix.length - 1;
  let col = 0;

  while (row > 0 || col < matrix[row].length) {
    if (!diagonalIsSame(matrix, row, col)) {
      return false;
    }

    // Update start position:
    // move up if possible, otherwise move to the right
    if (row > 0) {
      row--;
    } else if (col < matrix[row].length) {
      col++;
    }
  }

  return true;
}

/**
 * LeetCode Problem (Medium):
 * 1222. Queens That Can Attack the King
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  const KING = 1;
  const QUEEN = 2;
  const board = Array.from({ length: 8 }, () => Array(8).fill(0));
  board[king[0]][king[1]] = KING;
  queens.forEach((queen) => (board[queen[0]][queen[1]] = QUEEN));

  const queenCanAttackTheKing = (queen: number[]): boolean => {
    const [qx, qy] = queen;
    // top
    for (let i = qy - 1; i > -1; i--) {
      const block = board[qx][i];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
    }

    // bottom
    for (let i = qy + 1; i < 8; i++) {
      const block = board[qx][i];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
    }

    // right
    for (let i = qx - 1; i > -1; i--) {
      const block = board[i][qy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
    }

    // left
    for (let i = qx + 1; i < 8; i++) {
      const block = board[i][qy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
    }

    // top right diagonal
    let trdx = qx - 1;
    let trdy = qy + 1;

    while (trdx > -1 && trdy < 8) {
      const block = board[trdx][trdy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
      trdx--;
      trdy++;
    }

    // top left diagonal
    let tldx = qx - 1;
    let tldy = qy - 1;

    while (tldx > -1 && tldy > -1) {
      const block = board[tldx][tldy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
      tldx--;
      tldy--;
    }

    // bottom right diagonal
    let brdx = qx + 1;
    let brdy = qy + 1;

    while (brdx < 8 && brdy < 8) {
      const block = board[brdx][brdy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
      brdx++;
      brdy++;
    }

    // bottom left diagonal
    let bldx = qx + 1;
    let bldy = qy - 1;

    while (bldx < 8 && bldy > -1) {
      const block = board[bldx][bldy];
      if (block === KING) {
        return true;
      }
      if (block === QUEEN) {
        break;
      }
      bldx++;
      bldy--;
    }

    return false;
  };

  return queens.filter((queen) => queenCanAttackTheKing(queen));
}
