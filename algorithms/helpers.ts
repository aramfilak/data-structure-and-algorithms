/**
 * swap two array elements.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param array
 * @param i index of first element
 * @param j index of second element
 */
export function swap(array: number[], i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
}