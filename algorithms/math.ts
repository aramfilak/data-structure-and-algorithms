/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> Math <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/
/**
 * LeetCode Problem:
 * 441. Arranging Coins
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function arrangeCoins(n: number): number {
  let ans: number = 0;
  for (let i = 1; i <= n; i++) {
    n -= i;
    ans++;
  }
  return ans;
}
