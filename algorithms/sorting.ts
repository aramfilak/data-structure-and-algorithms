import {swap} from './helpers';
/**++++++++++++++++++++++++++++++++++++++++++++++
 >>>>>>>>>>>> LINEAR ALGORITHM  <<<<<<<<<<<<<<<<
 +++++++++++++++++++++++++++++++++++++++++++++++*/

/**
 * Count Sort
 * Time Complexity: O(n+k)
 * Space Complexity: : O(k)
 * @param array
 * @return sorted array.
 */
function countSort(array: number[]): number[] {
    let length: number = array.length,
        maxValue = array[0];
    for (let i = 1; i < length; ++i) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    let count: number[] = [];
    for (let i = 0; i <= maxValue; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < length; i++) {
        count[array[i]] += 1;
    }
    for (let i = 0, j = 0; i <= maxValue; i++) {
        while (count[i] > 0) {
            array[j++] = i;
            count[i] -= 1;
        }
    }
    return array;
}

/**++++++++++++++++++++++++++++++++++++++++++++++
 >>>>>>>>>> LOGARITHMIC ALGORITHM  <<<<<<<<<<<<<
 +++++++++++++++++++++++++++++++++++++++++++++++*/

// Performance test for n element
let arr: number[] = [];
let n = 100;
for (let i = 0; i < n; i++) {
    arr[i] = (Math.random() * n) | 0;
}
console.log('start');
let start = performance.now();
arr = countSort(arr);
let end = performance.now();
console.log(`end => { ${(end - start).toFixed(2)}ms }`);
console.log(arr);

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
function selectionSort(array: number[]): void {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = 1 + i; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
}

/**
 * Bubble Sort
 * Time Complexity: O(n^2)
 * Space Complexity: : O(1)
 * @param   array
 */
function bubbleSort(array: number[]): void {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}
