class TreeNode {
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;
    size: number = 0;

    constructor(val: number) {
        this.root = new TreeNode(val);
        this.size++;
    }

    /**
     * @return Returns True if the binary tree is empty, and False otherwise.
     */
    public isEmpty(): boolean {
        return !this.size;
    }

    /**
     * Inserts a new node with the given value in the binary tree.
     */
    public insert(val: number): void {
        if (!this.root) return;

        const newNode: TreeNode = new TreeNode(val);
        let cur: TreeNode | null = this.root;

        while (true) {
            if (cur.val === val) {
                break;
            } else if (cur.val > val) {
                if (cur.left) {
                    cur = cur.left;
                } else {
                    cur.left = newNode;
                    break;
                }
            } else if (cur.val < val) {
                if (cur.right) cur = cur.right;
                else {
                    cur.right = newNode;
                    break;
                }
            }
        }
        this.size++;
    }

    /**
     *  Deletes a node with the given value from the binary tree.
     */
    public delete(val: number) {}

    public search(val: number): boolean | undefined {
        function find(node: TreeNode | null, target: number): boolean | undefined {
            if (!node) return;
            if (node.val === target) return true;
            return find(node.left, target) || find(node.right, target);
        }

        return !(find(this.root, val) === undefined);
    }

    /**
     * Traverses the binary tree in preorder
     * traversal and returns a list of node values.
     */
    public preorderTraversal(): number[] {
        const preorderValues: number[] = [];
        let cur: TreeNode | null = this.root;
        if (!cur) return [];

        function traverse(cur: TreeNode | null): void {
            if (!cur) return;
            preorderValues.push(cur.val);
            traverse(cur.left);
            traverse(cur.right);
        }

        traverse(cur);
        return preorderValues;
    }

    /**
     * Traverses the binary tree in inorder traversal
     * and returns a list of node values.
     */
    public inorderTraversal(): number[] {
        const inorderValues: number[] = [];
        let cur: TreeNode | null = this.root;
        if (!cur) return [];

        function traverse(cur: TreeNode | null): void {
            if (!cur) return;
            traverse(cur.left);
            inorderValues.push(cur.val);
            traverse(cur.right);
        }

        traverse(cur);
        return inorderValues;
    }

    /**
     * Traverses the binary tree in postorder
     * traversal and returns a list of node values.
     */
    public postorderTraversal(): number[] {
        const postorderValues: number[] = [];
        let cur: TreeNode | null = this.root;
        if (!cur) return [];

        function traverse(cur: TreeNode | null): void {
            if (!cur) return;
            traverse(cur.left);
            traverse(cur.right);
            postorderValues.push(cur.val);
        }

        traverse(cur);
        return postorderValues;
    }

    /**
     *  Traverses the binary tree in level-order (breadth-first)
     *  traversal and returns a list of node values.
     */
    public levelOrder(): number[] {
        let levels: number[] = [];
        if (!this.root) return levels;
        const queue: TreeNode[] = [this.root];
        while (queue.length) {
            let cur = queue.shift()!;
            levels.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        return levels;
    }
}

let tree = new BinaryTree(1);
tree.insert(20);
tree.insert(10);
tree.insert(11);
tree.insert(6);
tree.insert(2);
tree.insert(25);
tree.insert(30);
tree.insert(4);
console.log(tree.levelOrder());
console.log(tree.postorderTraversal());
console.log(tree.search(555));
console.log(tree.search(11));
