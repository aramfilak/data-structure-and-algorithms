class ListNode {
    val: any;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * LeetCode Problem (Easy):
 * 206. Reverse Linked List
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prv: ListNode | null = null,
        cur: ListNode | null = head;
    while (cur) [cur.next, prv, cur] = [prv, cur, cur.next];
    return prv;
}

/**
 * LeetCode Problem (Easy):
 * 83. Remove Duplicates from Sorted List
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head?.next) return head;
    let prv: ListNode | null = null,
        cur: ListNode | null = head;
    while (cur) {
        if (prv && prv.val === cur.val) {
            [prv.next, cur] = [cur.next, prv?.next];
        } else {
            [prv, cur] = [cur, cur.next];
        }
    }
    return head;
}

/**
 * LeetCode Problem (Easy):
 * 141. Linked List Cycle
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function hasCycle(head: ListNode | null): boolean {
    let cur = head;
    let pointers = new Map<ListNode, ListNode>();
    while (cur) {
        if (pointers.has(cur)) return true;
        else {
            pointers.set(cur, cur);
            cur = cur.next;
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
// @ts-ignore
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let cur1 = l1;
    let cur2 = l2;
    // @ts-ignore
    let sum = 0n;
    // @ts-ignore
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
        // @ts-ignore
        pow *= 10n;
    }
    // @ts-ignore
    let head = new ListNode(Number(sum % 10n));
    // @ts-ignore
    sum /= 10n;
    let cur = head;
    while (sum) {
        // @ts-ignore
        cur.next = new ListNode(Number(sum % 10n));
        cur = cur.next;
        // @ts-ignore
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
    let cur = head,
        len = 0;
    while (cur) {
        len++;
        cur = cur.next;
    }
    let tailNodes: ListNode[] = [],
        count = 0;
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
        // @ts-ignore
        let nextNode = cur.next;
        // @ts-ignore
        cur.next = tailNode;
        // @ts-ignore
        tailNode.next = nextNode;
        cur = nextNode;
    }
    // @ts-ignore
    cur.next = null;
}

/**
 * LeetCode Problem (Medium):
 * 2181. Merge Nodes in Between Zeros
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    let cur = head?.next,
        zeroNode = head;
    while (cur) {
        if (!cur?.next?.next) {
            // @ts-ignore
            zeroNode.next = null;
        }
        if (!cur.val) {
            // @ts-ignore
            zeroNode.next = cur;
            zeroNode = cur;
        }
        // @ts-ignore
        zeroNode.val += cur.val;
        cur = cur.next;
        if (!cur?.next) break;
    }
    return head;
}

/**
 * LeetCode Problem (Medium):
 * 19. Remove Nth Node From End of List
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let len: number = 0;
    let prv: ListNode | null = null;
    let cur: ListNode | null = head;
    while (cur) {
        cur = cur.next;
        len++;
    }
    len -= n;
    cur = head;
    while (len) {
        prv = cur;
        cur = cur.next;
        len--;
    }
    if (cur === head) head = head.next || null;
    else if (!cur.next) prv.next = null;
    else if (cur.next) prv.next = cur.next;
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
    let values: any = [];
    for (let i = 0; i < lists.length; i++) {
        let cur = lists[i];
        while (cur) {
            values.push(cur.val);
            cur = cur.next;
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
