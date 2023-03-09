/***************************************************************
 --------------------- LeetCode Problems -----------------------
 ***************************************************************/

/***************************************************************
 >>>>>>>>>>>>>>>>>>>>> Binary Search <<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

import * as querystring from "querystring";

/**
 * 704. Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 */
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const middleIndex = Math.floor(left + (right - left) / 2);
        const middleValue = nums[middleIndex];
        if (middleValue < target) left = middleIndex + 1;
        else if (middleValue > target) right = middleIndex - 1;
        else return middleIndex;
    }
    return -1;
}

/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 */
function searchRange(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1, position: number[] = [-1, -1];
    while (left <= right) {
        const middleIndex = Math.floor(left + (right - left) / 2);
        const middleValue = nums[middleIndex];
        if (middleValue < target) left = middleIndex + 1;
        else if (middleValue > target) right = middleIndex - 1;
        if (middleValue === target) {
            let left = middleIndex, right = middleIndex;
            while (nums[left] === target && left > -1 || nums[right] === target && right < nums.length) {
                if (nums[left] === target) left--;
                if (nums[right] === target) right++;
                position = [left + 1, right - 1];
            }
            break;
        }
    }
    return position;
}

/**
 * 436. Find Right Interval
 * Time Complexity: O(n log n)
 * Space Complexity: : O(n)
 */
function findRightInterval(intervals: number[][]): number[] {
    const n = intervals.length;
    const sorted: [number[], number][] = [];
    for (let i = 0; i < n; i++)
        sorted.push([intervals[i], i]);
    sorted.sort((a, b) => a[0][0] - b[0][0]);

    function binarySearch(target: number): number {
        const lastIndex = n - 1;
        if (sorted[lastIndex][0][0] < target) return -1;
        let left = 0;
        let right = lastIndex;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (sorted[mid][0][0] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return sorted[left][1];
    }

    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        result[i] = binarySearch(intervals[i][1]);
    }
    return result;
}

/**
 * 611. Valid Triangle Number
 * Time Complexity: O(n log n)
 * Space Complexity: : O(n)
 */
function triangleNumber(nums: number[]): number {
    function binarySearch(nums: number[], left: number, right: number, sum: number): number {
        while (right >= left && right < nums.length) {
            const mid = Math.floor((right - left) / 2) + left;
            if (nums[mid] >= sum) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    }
    let ans = 0;
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < len- 1 && nums[i] !== 0; j++) {
            k = binarySearch(nums, k, len - 1, nums[i] + nums[j]);
            ans += k - j - 1;
        }
    }
    return ans;
}

/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> String <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
 * 2319. 242. Valid Anagram
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let sLetters = new Map();
    let tLetters = new Map();
    for (let i = 0; i < s.length; i++) {
        sLetters.set(s[i], (sLetters.get(s[i]) || 0) + 1);
        tLetters.set(t[i], (tLetters.get(t[i]) || 0) + 1);
    }
    let iterator = sLetters.keys();
    for (let i = 0; i < sLetters.size; i++) {
        let letter = iterator.next().value;
        if (sLetters.get(letter) !== tLetters.get(letter)) return false;
    }
    return true;
}

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
 * 1275. Find Winner on a Tic Tac Toe Game
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
        else board[moves[i][0]][moves[i][1]] = 'B';
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
        if (isWinner && cur !== '0') return cur;
    }
    return moves.length >= 9 ? 'Draw' : 'Pending';
}

/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Math <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
 * 50. Pow(x, n)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function myPow(x: number, n: number): number {
    if (x === -1) {
        if (n >= 2147483647) return -1;
        if (n <= -2147483648) return 1;
    }
    if (x === 1) if (n >= 2147483647 || n <= -2147483648) return 1;
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
}

/***************************************************************
 >>>>> Challenges can be solved easier if array is sorted <<<<<<
 ***************************************************************/

/*
 * 826. Most Profit Assigning Work
 * Time Complexity: O(n log n + q log q)
 * Space Complexity: O(n)
 */
function maxProfitAssignment(
    difficulty: number[],
    profit: number[],
    worker: number[]
): number {
    const jobs: number[][] = [];
    for (let i = 0; i < difficulty.length; i++)
        jobs.push([difficulty[i], profit[i]]);
    worker.sort((a, b) => a - b);
    jobs.sort((a, b) => a[0] - b[0]);
    let job = 0,
        curMaxProfit = 0,
        totalProfit = 0;
    for (let i = 0; i < worker.length; i++) {
        while (job < jobs.length && worker[i] >= jobs[job][0]) {
            curMaxProfit = Math.max(curMaxProfit, jobs[job][1]);
            job++;
        }
        totalProfit += curMaxProfit;
    }
    return totalProfit;
}

/*
 * 1005. Maximize Sum Of Array After K Negations
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let minVAl = nums[0] < 0 ? Math.abs(nums[0]) : nums[0];
    let minValIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k <= 0) break;
        if (nums[i] < 0) {
            nums[i] = Math.abs(nums[i]);
            k--;
        }
        if (nums[i] < minVAl) {
            minVAl = nums[i];
            minValIdx = i;
        }
    }
    if (k % 2 === 1) nums[minValIdx] = -nums[minValIdx];
    nums.forEach(el => (sum += el));
    return sum;
}

/**
 * 561. Array Partition
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let maximizedSum: number = 0;
    for (let i = 0; i < nums.length; i += 2) maximizedSum += nums[i];
    return maximizedSum;
}

/**
 * 976. Largest Perimeter Triangle
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
 * 1200. Minimum Absolute Difference
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
        if (arr[i] - arr[i - 1] === minDif) answer.push([arr[i - 1], arr[i]]);
    return answer;
}
