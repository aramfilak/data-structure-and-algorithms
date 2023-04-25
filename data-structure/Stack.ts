class StackNode {
    data: number;
    next: StackNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }

    toString(): string {
        return this.data.toString();
    }
}

class StackLinkedList {
    private head: StackNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value: number): void {
        const item = new StackNode(value);
        item.next = this.head;
        this.head = item;
        this.size += 1;
    }

    pop(): number {
        if (this.head === null) {
            throw new Error("No items!");
        }
        const StackNode = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return StackNode.data;
    }

    peek(): number {
        if (this.head === null) {
            throw new Error("No items!");
        }
        return this.head.data;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    getSize(): number {
        return this.size;
    }

    print(): void {
        if (this.head === null) return;
        let cur: StackNode | null = this.head;
        while (cur !== null) {
            console.log(" next => " + cur.data);
            cur = cur.next;
        }
    }
}

const stk = new StackLinkedList();
// push
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
stk.push(6);
console.log(stk.getSize());
stk.print();
// pop
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.peek());
// is empty
console.log(stk.isEmpty());

/*******************************************
 Array based Implementation of Stack
 *******************************************/

class StackArray {
    size: number;
    capacity: number;
    nextIndex: number;
    stack: number[];

    constructor(size: number) {
        this.stack = new Array(size);
        this.size = size;
        this.capacity = 0;
        this.nextIndex = size - 1;
    }

    isFull(): boolean {
        return this.capacity === this.size;
    }

    push(value: number): void {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
        }
        this.stack[this.nextIndex] = value;
        this.nextIndex--;
        this.capacity++;
    }

    peek(): number {
        if (this.empty()) {
            throw new Error("Stack Underflow");
        }
        return this.stack[this.size - this.capacity];
    }

    pop(): number {
        if (this.empty()) {
            throw new Error("Stack Underflow");
        }
        const popValue = this.stack[this.size - this.capacity];
        this.stack[this.size - this.capacity] = 0;
        this.capacity--;
        this.nextIndex++;
        return popValue;
    }

    empty(): boolean {
        return this.capacity === 0;
    }

    print(): void {
        if (this.empty()) {
            return;
        }
        const startPoint = this.size - this.capacity;
        for (let i = startPoint; i <= this.size - 1; i++) {
            console.log(` => | ${this.stack[i]} |`);
        }
    }
}

// Example usage
const st = new StackArray(6);
console.log(st.size);
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.push(6);
console.log(st.pop());
st.pop();
st.print();
console.log(st.empty());
console.log(st.isFull());
console.log(st.peek());
// Output:
// 6
// => | 4 |
// => | 3 |
// => | 2 |
// => | 1 |
// false
// false
// 4
