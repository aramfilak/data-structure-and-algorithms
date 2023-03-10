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
        let i = 0, j = 0;
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
// Performance test for n element
let arr: number[] = [];
let n = 1_000_000;
for (let i = 0; i < n; i++) {
    arr[i] = (Math.random() * n) | 0;
}
console.log('start');
let start = performance.now();
let x = mergeSort(arr);
let end = performance.now();
console.log(`end => { ${(end - start).toFixed(2)}ms }`);
console.log(x);

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
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
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
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}
