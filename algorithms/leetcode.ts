
/***************************************************************
 ''''''''''''' My Leetcode Solutions All In One '''''''''''''''
 ***************************************************************/



/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Matrix <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
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
            if (leftDiagonalIndex === j && curPositionValue === 0 ||
                rightDiagonalIndex === j && curPositionValue === 0) {
                return false;
            } else if (curPositionValue !== 0
                && j !== leftDiagonalIndex
                && j !== rightDiagonalIndex) return false;
        }
        leftDiagonalIndex++;
        rightDiagonalIndex--;
    }
    return true;
}

/**
 * 867. Transpose Matrix (Easy)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function transpose(matrix: number[][]): number[][] {
    const transpose = [];
    for (let j = 0; j < matrix[0].length; j++) {
        let row = [];
        for (let i = 0; i < matrix.length; i++) {
            row.push(matrix[i][j])
        }
        transpose.push(row)
    }
    return transpose;
};

/**
 * 1275. Find Winner on a Tic Tac Toe Game (Easy)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function tictactoe(moves: number[][]): string {
    const board: string[][] = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0'],
    ];
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) board[moves[i][0]][moves[i][1]] = 'A';
        else board[moves[i][0]][moves[i][1]] = 'B'
    }
    const results = [];
    let leftDiagonalResults = []
    let rightDiagonal = 2;
    let rightDiagonalResults = []
    for (let i = 0; i < 3; i++) {
        let colsResults = [];
        for (let j = 0; j < 3; j++) {
            colsResults.push(board[j][i]);
        }
        results.push(colsResults);
        leftDiagonalResults.push(board[i][i])
        rightDiagonalResults.push(board[i][rightDiagonal])
        rightDiagonal--;
        results.push(board[i]);
    }
    results.push(rightDiagonalResults, leftDiagonalResults)
    for (let i = 0; i < results.length; i++) {
        let cur: string = results[i][0];
        let isWinner = true;
        for (let j = 1; j < 3; j++) {
            if (results[i][j] !== cur) {
                isWinner = false;
            }
        }
        if (isWinner && cur !== '0') return cur;
    }
    return moves.length >= 9 ? "Draw" : "Pending"
};

/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Math <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
 * 50. Pow(x, n) (Medium)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function myPow(x: number, n: number): number {
    if (x === -1) {
        if (n >= 2147483647) return -1;
        if (n <= -2147483648) return 1;
    }
    if (x === 1)
        if (n >= 2147483647 || n <= -2147483648) return 1;
    if (n <= -2147483648 || n >= 2147483647) return 0;

    if (n > 0) {
        const power = function (base: number, exponent: number): number {
            if (exponent === 1) return base;
            return base * power(base, exponent - 1);
        };
        return power(x, n);
    } else {
        const power = function (base: number, exponent: number): number {

            if (exponent === 1) return base;
            return power(base, exponent + 1) / base;
        };
        return power(x, n);
    }
};

/***************************************************************
 >>>>> Challenges can be easily solved if array is sorted <<<<<<
 ***************************************************************/

/*
 * 1921. Eliminate Maximum Number of Monsters (Medium)
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function eliminateMaximum(dist: number[], speed: number[]): number {
    return 1;
};

/**
 * 561. Array Partition (Easy)
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let maximizedSum: number = 0;
    for (let i = 0; i < nums.length; i += 2)
        maximizedSum += nums[i];
    return maximizedSum;
}

/**
 * 976. Largest Perimeter Triangle (Easy)
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i > 1; i--) {
        let a: number = nums[i - 2],
            b: number = nums[i - 1],
            c: number = nums[i];
        if (a + b > c) return a + b + c;
    }
    return 0;
}

/**
 * 1200. Minimum Absolute Difference (Easy)
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function minimumAbsDifference(arr: number[]): number[][] {
    const answer: number[][] = [];
    arr.sort((a, b) => a - b);
    let minDif: number = 2147483647;
    for (let i = 1; i < arr.length; i++)
        minDif = Math.min(minDif, arr[i] - arr[i - 1]);
    for (let i = 1; i < arr.length; i++)
        if (arr[i] - arr[i - 1] === minDif)
            answer.push([arr[i - 1], arr[i]]);
    return answer;
}