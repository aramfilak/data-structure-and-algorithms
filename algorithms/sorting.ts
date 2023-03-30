/**++++++++++++++++++++++++++++++++++++++++++++++
 >>>>>>>>>>>> LINEAR ALGORITHM  <<<<<<<<<<<<<<<<
 +++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Count Sort
 * Time Complexity: O(n+k)
 * Space Complexity: : O(k)
 * @param array
 */
function countSort(array: number[]): void {
  let length: number = array.length,
    maxValue = array[0];
  for (let i = 1; i < length; ++i) if (array[i] > maxValue) maxValue = array[i];
  let count: number[] = [];
  for (let i = 0; i <= maxValue; i++) count[i] = 0;

  for (let i = 0; i < length; i++) count[array[i]] += 1;

  for (let i = 0, j = 0; i <= maxValue; i++) {
    while (count[i] > 0) {
      array[j++] = i;
      count[i] -= 1;
    }
  }
}

/**++++++++++++++++++++++++++++++++++++++++++++++
 >>>>>>>>>> LOGARITHMIC ALGORITHM  <<<<<<<<<<<<<
 +++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * Quick Sort
 * Time Complexity: O(n log n)
 * Space Complexity: : O(n log n)
 * @param array
 * @return sorted array.
 */
function quickSort(array: number[]): number[] {
  if (array.length < 2) return array;
  const pivot = array[array.length - 1],
    left = [],
    right = [],
    equal = [];
  for (let val of array) {
    if (val < pivot) left.push(val);
    else if (val > pivot) right.push(val);
    else equal.push(val);
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

/**
 * Merge Sort
 * Time Complexity: O(n log n)
 * Space Complexity: : O(n)
 * @param array
 * @return sorted array.
 */
function mergeSort(array: number[]): number[] {
  const half = array.length / 2;
  if (array.length < 2) return array;
  const left = array.slice(0, half);
  const right = array.slice(half);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left: number[], right: number[]): number[] {
    let i = 0,
      j = 0;
    const result: number[] = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}

/**++++++++++++++++++++++++++++++++++++++++++++++
 >>>>>>>>>>>>>> QUADRATIC ALGORITHM <<<<<<<<<<<<<
 +++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Insertion Sort
 * Time Complexity: O(n^2)
 * Space Complexity: : O(1)
 * @param array
 */
function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    let curVal: number = array[i],
      j: number = i - 1;
    for (; j > -1 && array[j] > curVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curVal;
  }
}

/**
 * Selection Sort
 * Time Complexity: O(n^2)
 * Space Complexity: : O(1)
 * @param array
 */
function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = 1 + i; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

/**
 * Bubble Sort
 * Time Complexity: O(n^2)
 * Space Complexity: : O(1)
 * @param array
 */
function bubbleSort(array: number[]): void {
  for (let i = array.length; i > 0; i--)
    for (let j = 0; j < i - 1; j++)
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
}


/***************************************************************
 >>>>> Challenges can be solved easier if array is sorted <<<<<<
 ***************************************************************/

/*
 * LeetCode Problem (Easy):
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
  nums.forEach((el) => (sum += el));
  return sum;
}

/**
 * LeetCode Problem (Easy):
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
 * LeetCode Problem (Easy):
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
 * LeetCode Problem (Easy):
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

/*
 * LeetCode Problem (Medium):
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
