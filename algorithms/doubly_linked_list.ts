/**
 * LeetCode Problem (Medium):
 * 1472. Design Browser History
 *  Time complexity:
 *  visit O(1)
 *  forward O(steps)
 *  backword O(steps)
 *  Space complexity:
 *  visit O(n)
 *  forward O(1)
 *  backword O(1)
 */

class DoublyLinkedListNode {
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;
  val: string;

  constructor(val: string) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class BrowserHistory {
  curPosition: DoublyLinkedListNode;
  size: number;

  constructor(homepage: string) {
    this.curPosition = new DoublyLinkedListNode(homepage);
    this.size = 1;
  }

  visit(url: string): void {
    const newPage: DoublyLinkedListNode = new DoublyLinkedListNode(url);
    newPage.prev = this.curPosition;
    this.curPosition.next = newPage;
    this.curPosition = newPage;
    this.size++;
  }

  back(steps: number): string {
    while (steps && this.curPosition.prev) {
      this.curPosition = this.curPosition.prev;
      steps--;
    }
    return this.curPosition.val;
  }

  forward(steps: number): string {
    while (steps && this.curPosition.next) {
      this.curPosition = this.curPosition.next;
      steps--;
    }
    return this.curPosition.val;
  }
}
