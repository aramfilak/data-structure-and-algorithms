/**
 * LeetCode Problem (Easy):
 * 589. N-ary Tree Preorder Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
function preorder(root: Node | null, ans: number[] = []): number[] {
	if (!root) return ans;
	let stack = [root];
	while (stack.length) {
		// @ts-ignore
		const { val, children }: Node = stack.pop();
		ans.push(val);
		for (let i = children.length - 1; i >= 0; i--) {
			stack.push(children[i]);
		}
	}
	return ans;
}
