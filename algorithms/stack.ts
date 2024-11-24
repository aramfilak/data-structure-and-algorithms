/**
 * LeetCode Problem (Easy):
 * 20. Valid Parentheses
 * Time Complexity: O(n)
 * Space Complexity: : O(n)
 */

function isValid(s: string): boolean {
  const closeParenthese: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const openParentheseStack = [];

  for (const parenthesis of s) {
    if (parenthesis === '(' || parenthesis === '{' || parenthesis === '[') {
      openParentheseStack.push(parenthesis);
    } else if (closeParenthese[parenthesis] === openParentheseStack.at(-1)) {
      openParentheseStack.pop();
    } else {
      return false;
    }
  }

  console.log(openParentheseStack);
  return openParentheseStack.length === 0;
}
