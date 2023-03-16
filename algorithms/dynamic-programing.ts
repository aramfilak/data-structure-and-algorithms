/***************************************************************
 >>>>>>>>>>>>>>>>>>>>> Dynamic Programming <<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/

/**
 * LeetCode Problem:
 * 509. Fibonacci Number
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function fib(n: number): number {
  if (!n) return n;
  let num1: number = 0, num2: number = 1, sum: number = num1 + num2;
  while (n > 1) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    n--;
  }
  return sum;
}

/**
 * LeetCode Problem:
 * 1137. N-th Tribonacci Number
 * Time Complexity: O(n)
 * Space Complexity: : O(1)
 */
function tribonacci(n: number): number {
  if (!n) return n;
  if (n <= 2) return 1;
  let num1: number = 0,
    num2: number = 1,
    num3: number = 1,
    sum: number = num1 + num2 + num3;
  while (n > 2) {
    sum = num1 + num2 + num3;
    num1 = num2;
    num2 = num3;
    num3 = sum;
    n--;
  }
  return sum;
}
