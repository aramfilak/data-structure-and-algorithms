/**
 * LeetCode Problem (Easy):
 * 232. Implement Queue using Stacks
 */

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class QueueNode {
    next: QueueNode | null;
    val: any;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

class MyQueue {
    head: QueueNode | null;
    size = 0;

    constructor() {
        this.head = null;
    }

    push(val: number): void {
        // O(n)
        let newNode: QueueNode | null = new QueueNode(val);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        let cur: QueueNode | null = this.head;
        while (cur) {
            if (!cur.next) {
                cur.next = newNode;
                this.size++;
                return;
            } else {
                cur = cur.next;
            }
        }
    }

    pop(): number | null {
        // O(1)
        if (!this.head) return null;
        let headVal: number = this.head.val;
        this.head = this.head.next;
        this.size--;
        return headVal;
    }

    peek(): number | null {
        // O(1)
        if (!this.head) return null;
        return this.head.val;
    }

    empty(): boolean {
        // O(1)
        return this.size === 0;
    }
}

const q: MyQueue = new MyQueue();
q.push(50);
q.push(30);
q.push(90);
q.push(40);
q.push(100);
console.log(q.size);
console.log(q.peek());
console.log(q.empty());
console.log(q.pop());
console.log(q.size);
