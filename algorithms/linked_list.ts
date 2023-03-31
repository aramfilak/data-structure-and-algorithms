/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>> LinkedList <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * LeetCode Problem (Easy):
 * 141. Linked List Cycle
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function hasCycle(head: ListNode | null): boolean {
  if(!head?.next) return false
  let cur: ListNode | null = head;
  let next: ListNode | null | undefined = head?.next;
  let pointers = new Map<ListNode, ListNode>
  while (cur) {
    if (cur.next===next) return true;
    else {
      pointers.set(cur, cur)
      cur = cur.next
      next = next?.next
    }
  }
  return false;
}

/**
 * LeetCode Problem (Medium):
 * 2. Add Two Numbers
 * Time Complexity: O(max(m,n))
 * Space Complexity: O(max(m,n))
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let cur1 = l1;
  let cur2 = l2;
  let sum = 0n;
  let pow = 1n;
  while (cur1 || cur2) {
    if (cur1) {
      sum += BigInt(cur1.val) * pow;
      cur1 = cur1.next;
    }
    if (cur2) {
      sum += BigInt(cur2.val) * pow;
      cur2 = cur2.next;
    }
    pow *= 10n;
  }
  let head = new ListNode(Number(sum % 10n));
  sum /= 10n;
  let cur = head;
  while (sum) {
    cur.next = new ListNode(Number(sum % 10n));
    cur = cur.next;
    sum /= 10n;
  }
  return head;
}

/**
 * LeetCode Problem (Medium):
 * 143. Reorder List
 * Time Complexity: O(n)
 * Space Complexity: O(n/2)
 */

function reorderList(head: ListNode | null): void {
  let cur = head, len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let tailNodes = [], count = 0;
  cur = head;
  while (cur) {
    count++;
    if (count > Math.round(len / 2)) {
      tailNodes.push(cur);
    }
    cur = cur.next;
  }
  cur = head;
  while (tailNodes.length) {
    let tailNode = tailNodes.pop();
    let nextNode = cur.next;
    cur.next = tailNode;
    tailNode.next = nextNode;
    cur = nextNode;
  }
  cur.next = null;
}

/**
 * LeetCode Problem (Medium):
 * 2181. Merge Nodes in Between Zeros
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function mergeNodes(head: ListNode | null): ListNode | null {
  let cur = head?.next, zeroNode = head;
  while (cur) {
    if (!cur.next.next) {
      zeroNode.next = null;
    }
    if (!cur.val) {
      zeroNode.next = cur;
      zeroNode = cur;
    }
    zeroNode.val += cur.val;
    cur = cur.next;
    if (!cur.next) break;
  }
  return head;
}

/**
 * LeetCode Problem (Hard):
 * 23. Merge k Sorted Lists
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  let values = [];
  for (let i = 0; i < lists.length; i++) {
    let cur = lists[i];
    while (cur) {
      values.push(cur.val)
      cur = cur.next
    }
  }
  if (!values.length) return null;
  let sortedValues = values.sort((a, b) => a - b);
  let head = new ListNode(sortedValues[0]);
  let cur = head;
  for (let i = 1; i < values.length; i++) {
    let node = new ListNode(values[i]);
    cur.next = node;
    cur = cur.next;
  }
  return head;
}
