/**
 * 1200. Minimum Absolute Difference (Easy)
 * swap two array elements.
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function minimumAbsDifference(arr: number[]): number[][] {
    const answer: number[][] = [];
    arr.sort((a, b) => a - b);
    let minDif = 2147483647;
    for (let i = 1; i < arr.length; i++)
        minDif = Math.min(minDif, arr[i] - arr[i - 1]);
    for (let i = 1; i < arr.length; i++)
        if (arr[i] - arr[i - 1] === minDif)
            answer.push([arr[i - 1], arr[i]]);
    return answer;
}


/*
 * Terminologies:
 * Brute Force: try everything to get the solution.
 * Ad-hoc: no specific well-known algorithm for a problem.
 * Greedy: logically.
 * */
