/**
 * LeetCode Problem (Medium):
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

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param str input string.
 * @returns string in reverse.
 */
function reverse(str: string): string {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param curIndex
 * @param n number of elements.
 * @return Sum of last n elements in array.
 */
function prefixSum(array: number[], curIndex: number = 0, n: number): number {
	if (curIndex + 1 === n) return array[curIndex];
	return array[curIndex] + prefixSum(array, curIndex + 1, n);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * @param n number of elements
 * @return Sum of last n elements in array
 */
function suffixSum(array: number[], length: number, n: number): number {
	if (length === n) return array[length - 1];
	return array[length - 1] + suffixSum(array, length - 1, n);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param main main string.
 * @param prefix start with string.
 * @param startIndex
 * @return ture if main start with the given prefix, else false.
 */
function isPrefix(main: string, prefix: string, startIndex: number = 0): boolean {
	if (startIndex === prefix.length) return true;
	if (prefix[startIndex] !== main[startIndex]) return false;
	return isPrefix(main, prefix, startIndex + 1);
}

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param start start number.
 * @param end last number.
 * @return compute how many primes between start and end, inclusive indices.
 */
function countPrimes(start: number, end: number): number {
	if (start > end) return 0;
	let result: number = countPrimes(start + 1, end);
	if (isPrime(start)) result++;
	return result;

	function isPrime(n: number, i: number = 2): boolean {
		if (n <= 2) return n === 2;
		if (n % i === 0) return false;
		if (i * i > n) return true;
		return isPrime(n, i + 1);
	}
}

/**
 * Time Complexity: O(log n)
 * Space Complexity: O(n)
 * @param array
 * @param start start pointer =  0
 * @param end end pointer = array.length - 1
 * @return decides if array is palindrome or not.
 */
function isPalindrome(array: number[], start: number, end: number): boolean {
	if (start > end) return true;
	if (array[start] !== array[end]) return false;
	return isPalindrome(array, start + 1, end - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * @param startIndex
 * modify in-place. => change each element
 * at position i to be the maximum of numbers from i to end of array.
 */
function rightMax(array: number[], length: number, startIndex: number = 0): void {
	if (length === 1) return;
	rightMax(array, length - 1, startIndex + 1);
	array[startIndex] = Math.max(array[startIndex], array[startIndex + 1]);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * modify in-place. => change each element
 * at position i to be the maximum of numbers from 0 to index i.
 */
function leftMax(array: number[], length: number): void {
	if (length === 1) return;
	leftMax(array, length - 1);
	array[length - 1] = Math.max(array[length - 1], array[length - 2]);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * modify in-place. => arr[i] + arr 0-index of arr[i]
 */
function arrayAccumulation(array: number[], length: number): void {
	if (length === 1) return;
	arrayAccumulation(array, length - 1);
	array[length - 1] += array[length - 2];
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * modify in-place. => arr[i] + i.
 */
function arrayIncrement(array: number[], length: number): void {
	if (length === 0) return;
	arrayIncrement(array, length - 1);
	array[length - 1] += length - 1;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param length
 * @return {number} average of array elements.
 */
function arrayAverage(array: number[], length: number): number {
	if (length === 1) return array[0];
	return (array[length - 1] + arrayAverage(array, length - 1) * (length - 1)) / length;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param  array
 * @param  length
 * @return sum of array elements.
 */
function arraySum(array: number[], length: number): number {
	if (length === 1) return array[0];
	return array[length - 1] + arraySum(array, length - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array
 * @param  length array length.
 * @return the largest value in array.
 */
function arrayMaximum(array: number[], length: number): number {
	if (length === 1) return array[0];
	let subResult = arrayMaximum(array, length - 1);
	if (array[length - 1] > subResult) return array[length - 1];
	else return subResult;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param base
 * @param exponent
 * @return result of base to power exponent.
 */
function power(base: number, exponent: number): number {
	if (exponent === 0) return base;
	return base * power(base, exponent - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param n start value.
 * @return length of 3n+1 Sequence.
 */
function getLengthOf3NPlus1Sequence(n: number): number {
	if (n === 1) return 1;
	if (n % 2 === 0) return 1 + getLengthOf3NPlus1Sequence(n / 2);
	else return 1 + getLengthOf3NPlus1Sequence(3 * n + 1);
}

/**
 * print 3n+1 Sequence.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param n start value.
 */
function print3NPlus1Sequence(n: number): void {
	console.log(n);
	if (n === 1) return;
	if (n % 2 === 0) print3NPlus1Sequence(n / 2);
	else print3NPlus1Sequence(3 * n + 1);
}

/**
 * print a triangle version 2.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param rows numbers of stars in each row.
 */
function printTriangleV2(rows: number): void {
	if (rows === 0) return;
	printTriangleV2(rows - 1);
	let row = "";
	for (let i = 0; i < rows; i++) {
		row += "*";
	}
	console.log(row);
}

/**
 * print a triangle version 1.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number} rows numbers of stars in each row.
 */
function printTriangleV1(rows: number): void {
	if (rows === 0) return;
	let row = "";
	for (let i = 0; i < rows; i++) {
		row += "*";
	}
	console.log(row);
	printTriangleV1(rows - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: : O(n)
 * @param n product.
 * @return return factorial of n.
 */
function factorial(n: number): number {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: : O(n)
 * @param n
 * @returns sum of 0 to n.
 */
function recursiveRange(n: number): number {
	if (n === 1) return n;
	return n + recursiveRange(n - 1);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param array.
 * @returns in-place ,capitalize the first
 * letter of each string in the array.
 */
function capitalizeFirst(array: string[]): string[] {
	function inner(array: string[], len: number) {
		if (len === -1) return;
		array[len] = array[len][0].toLocaleUpperCase() + array[len].substring(1);
		inner(array, len - 1);
	}

	inner(array, array.length - 1);
	return array;
}
