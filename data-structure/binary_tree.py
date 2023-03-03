"""
The tree data structure is used to
represent information in an easily
searchable hierarchical format
"""
import collections
import random


class Node:
    def __init__(self, val=None, left=None, right=None):
        self.left = left
        self.right = right
        self.val = val

    def __repr__(self):
        return f'{self.val}'


class BinaryTree:

    def __init__(self):
        self.root = None

    """
    Traversal: The process of visiting all the
    elements in the data structure only one
    
    Traversal Techniques: 
    
    => Breadth First (Level-Order, BFS)
    
    => Depth First (DFS)
        1) Preorder
        2) Inorder
        3) Postorder
    """

    def print_level_order(self):

        nodes_queue = collections.deque()
        nodes_queue.append(self.root)

        while nodes_queue:
            cur = nodes_queue.popleft()

            print(cur.val, end=' ')

            if cur.left:
                nodes_queue.append(cur.left)
            if cur.right:
                nodes_queue.append(cur.right)
        print("")

    def print_levels_and_nodes(self):
        import collections
        nodes_queue = collections.deque()
        nodes_queue.append(self.root)
        level = 0

        while nodes_queue:
            print(f'\nLevel {level}: ', end='')

            for step in range(len(nodes_queue)):
                cur = nodes_queue.popleft()

                print(cur.val, end=' ')

                if cur.left:
                    nodes_queue.append(cur.left)
                if cur.right:
                    nodes_queue.append(cur.right)
            level += 1

    def print_pre_order(self):
        def pre_order(cur):
            """
            A. Root
            B. Left Subtree
            C. Right Subtree
            """
            if not cur:
                return

            print(cur.val, end=' ')
            pre_order(cur.left)
            pre_order(cur.right)

        pre_order(self.root)

    def print_in_order(self):
        # Recursive-Version
        def in_order(cur):
            """
            A. Left Subtree
            B. Root
            C. Right Subtree
            """
            if not cur:
                return
            in_order(cur.left)
            print(cur.val, end=' ')
            in_order(cur.right)

        in_order(self.root)

    def print_in_order_it(self):
        """
        A. Left Subtree
        B. Root
        C. Right Subtree
        Iterative -Version O(n) Time and Space Complexity
        """
        nodes_stack = []
        results = []
        cur = self.root
        # while stack is not empty or current node ist not None
        while nodes_stack or cur:
            # left subtree
            while cur:
                nodes_stack.append(cur)
                cur = cur.left
            cur = nodes_stack.pop()
            results.append(cur.val)
            # right subtree
            cur = cur.right
        return results

    def print_post_order(self):
        def post_order(cur):
            """
            A. Left Subtree
            B. Right Subtree
            C. Root
            """
            if not cur:
                return
            post_order(cur.left)
            post_order(cur.right)
            print(cur.val, end=' ')

        post_order(self.root)

    """ 
    Another Functionalities 
    """

    def insert(self, val):
        # insert in ordered way
        # val > to right
        # val < to left
        new_node = Node(val)
        if not self.root:
            self.root = new_node
            return

        cur = self.root
        while True:
            if val == cur.val:
                return None
            elif val < cur.val:
                if cur.left is None:
                    cur.left = new_node
                    return
                cur = cur.left
            else:
                if cur.right is None:
                    cur.right = new_node
                    return
                cur = cur.right

    def has(self, value):
        def find_value(cur, val):
            if not cur:
                return False
            if val == cur.val:
                return True
            if val > cur.val:
                return find_value(cur.right, val)
            return find_value(cur.left, val)

        return find_value(self.root, value)

    def clear(self):
        self.__init__()

    def add_by_direction(self, path: list, directions: list):
        assert len(path) == len(directions)
        cur = self.root
        for idx, val in enumerate(path):
            direction = directions[idx]

            while True:
                if direction == 'L':
                    if cur.left is None:
                        cur.left = Node()
                        cur = cur.left
                        cur.val = val
                        break
                    else:
                        cur = cur.left
                        break
                else:
                    if cur.right is None:
                        cur.right = Node()
                        cur = cur.right
                        cur.val = val
                        break
                    else:
                        cur = cur.right
                        break

    def max_val(self):
        # return max val in tree
        if not self.root:
            return
        cur, max_val = self.root, self.root.val
        while cur.right:
            cur = cur.right
            if cur.val > max_val:
                max_val = cur.val
        return max_val

    def max_value_unordered_binary_tree(self):
        def get_max_val(cur):
            if not cur:
                return float('-inf')

            return max(cur.val, get_max_val(cur.left), get_max_val(cur.right))

        return get_max_val(self.root)

    def min_val(self):
        # return min val in tree
        if not self.root:
            return
        cur, min_val = self.root, self.root.val
        while cur.left:
            cur = cur.left
            if cur.val < min_val:
                min_val = cur.val
        return min_val

    """ 
    LeetCode Problems Easy To Medium
    """

    def max_depth(self, root) -> int:
        # 104. Maximum Depth of Binary Tree (Easy)
        return 1 + max(self.max_depth(root.left), self.max_depth(root.right)) if root else 0

    def is_cousins(self, root, x: int, y: int) -> bool:
        # 993. Cousins in Binary Tree (Easy)
        def find(root, parent, value, depth=0):
            # Find node with the request value and return its parent node
            if not root:
                return None, depth

            if root.val == value:
                return parent, depth

            l_parent, l_depth = find(root.left, root, value, depth + 1)

            if l_parent:
                return l_parent, l_depth

            return find(root.right, root, value, depth + 1)

        x_parent, x_depth = find(root, None, x)
        y_parent, y_depth = find(root, None, y)

        return x_depth == y_depth and x_parent != y_parent

    def sum_of_left_leaves(self, root) -> int:
        # 404. Sum of Left Leaves (Easy)
        self.total = 0

        def dfs(node, left):
            if not node:
                return
            dfs(node.left, True)
            dfs(node.right, False)
            if not node.left and not node.right and left:
                self.total += node.val

        dfs(root, False)

        return self.total

    def level_order(self, root):
        # 102. Binary Tree Level Order Traversal (Medium)
        ans = []

        if root is None:
            return ans

        n = collections.deque([root])
        while n:
            l = []
            count = len(n)
            for _i in range(count):
                cur = n.popleft()
                l.append(cur.val)
                if cur.left is not None:
                    n.append(cur.left)
                if cur.right is not None:
                    n.append(cur.right)
            ans.append(l)
        return ans

    def searchBST(self, val):
        cur = self.root
        right, left = None, None
        while cur:

            if cur.val == val:
                if cur.right:
                    right = cur.right
                if cur.left:
                    left = cur.left
                return [cur, right, left]
            else:
                if cur.val < val:
                    cur = cur.right
                if cur.val > val:
                    cur = cur.left
        return []


if __name__ == '__main__':
    tree = BinaryTree()
    tree.insert(4);
    tree.insert(7)
    tree.insert(2)
    tree.insert(3)
    tree.insert(1)
    print(tree.searchBST(4))
    tree.print_level_order()

    # for k in range(10, 100, 10):
    #     tree.insert(k)
    # print(tree.level_order(tree.root))  # [[1], [50], [30, 100], [40, 60], [70], [80]]
    # print()
    # tree.print_level_order()  # [[1], [50], [30, 100], [40, 60], [70], [80]]
    # print()
    # tree.print_levels_and_nodes()
    # print()
    # # Level 0: 10
    # # Level 1: 50
    # # Level 2: 30 100
    # # Level 3: 40 60
    # # Level 4: 70
    # # Level 5: 80
    # print(tree.max_depth(tree.root))  # 6
    # print(tree.sum_of_left_leaves(tree.root))  # 0
    # print(tree.is_cousins(tree.root, 80, 70))  # Fasle
    # print(tree.max_val())  # 100
    # print('max-val', tree.max_value_unordered_binary_tree())
    # print(tree.min_val())  # 1
    # tree.print_pre_order()  # 1 50 30 40 100 60 70 80
    # print()
    # tree.print_in_order()  # 1 30 40 50 60 70 80 100
    # print()
    # print(tree.print_in_order_it())  # 1 30 40 50 60 70 80 100
    # tree.print_post_order()  # 40 30 80 70 60 100 50 1
    # print()
    # tree.print_level_order()  # 1 50 30 100 40 60 70 80
    # print()
    # tree.clear()
    # tree.insert(1)
    # tree.add_by_direction([2, 4, 7], ['L', 'L', 'L'])
    # tree.add_by_direction([2, 4, 8], ['L', 'L', 'R'])
    # tree.add_by_direction([2, 5, 9], ['L', 'R', 'R'])
    # tree.add_by_direction([3, 6, 10], ['R', 'R', 'L'])
    # tree.print_in_order()
    # print()
    # tree.clear()
    #
    # bst = BinaryTree()
    # for k in range(10, 100, 10):
    #     bst.insert(k)
    # bst.print_in_order()
    # print()
    # print(bst.has(90))
