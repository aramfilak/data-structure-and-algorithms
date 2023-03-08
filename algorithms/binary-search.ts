/**
 * 704. Binary Search (LeetCode)
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 * @param nums sorted array
 * @param target
 * @return the target number if it is found, otherwise -1;
 */
function binarySearch(nums: number[], target: number): number {
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
 * 34. Find First and Last Position of Element in Sorted Array  (LeetCode)
 * Time Complexity: O(log n)
 * Space Complexity: : O(1)
 * @param nums sorted array
 * @param target
 * @return First and Last Position
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