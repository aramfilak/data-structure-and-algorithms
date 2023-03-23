/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>> LinkedList <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/


/**
 * LeetCode Problem:
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
  let head = new ListNode(sortedValues.shift());
  let cur = head;
  while (sortedValues.length) {
    let node = new ListNode(sortedValues.shift())
    cur.next = node;
    cur = cur.next;
  }
  return head;
}


class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


/**
 * LeetCode Problem:
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
 * LeetCode Problem:
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
