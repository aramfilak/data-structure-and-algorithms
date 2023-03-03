/**
 * 1200. Minimum Absolute Difference (Easy)
 * swap two array elements.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function minimumAbsDifference(arr: number[]): number[][] {
	const answer: number[][] = [];

	let map = new Map<number, number>();
	// find the smallest difference.
	let min1 = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (min1 > arr[i]) min1 = arr[i];
		map.set(arr[i], arr[i]);
	}

	let min2 = arr[0] === min1 ? arr[1] : arr[0];
	for (let i = 0; i < arr.length; i++)
		if (min2 > arr[i] && arr[i] !== min1) min2 = arr[i];

	let minDiff = Math.abs(min1 - min2);
	for (let i = 0; i < arr.length; i++) {}

	return answer;
}
console.log(minimumAbsDifference([-1, -2]));

/*
 * Terminologies:
 * Brute Force: try everything to get the solution.
 * Ad-hoc: no specific well-known algorithm for a problem.
 * Greedy: logically.
 * */
