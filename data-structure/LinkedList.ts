class LinkedListNode {
	data: any;
	next: LinkedListNode | null;
	prev: LinkedListNode | null;

	constructor(data: any, next: LinkedListNode | null = null, prev: LinkedListNode | null = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}

	toString() {
		return `${this.data}`;
	}
}

class LinkedList {
	head: LinkedListNode | null;
	tail: LinkedListNode | null;
	length: number;
	constructor(initialValues: any[] = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let value of initialValues) {
			this.insertEnd(value);
		}
	}

	private addLinkedListNode(LinkedListNode: LinkedListNode): void {
		this.length++;
	}

	private deleteLinkedListNode(LinkedListNode: LinkedListNode): void {
		this.length--;
	}

	insertStart(data: any): void {
		const newLinkedListNode = new LinkedListNode(data, this.head, null);

		if (this.head) {
			this.head.prev = newLinkedListNode;
		} else {
			this.tail = newLinkedListNode;
		}

		this.head = newLinkedListNode;
		this.addLinkedListNode(newLinkedListNode);
	}

	insertEnd(data: any): void {
		const newLinkedListNode = new LinkedListNode(data, null, this.tail);

		if (this.tail) {
			this.tail.next = newLinkedListNode;
		} else {
			this.head = newLinkedListNode;
		}

		this.tail = newLinkedListNode;
		this.addLinkedListNode(newLinkedListNode);
	}

	removeStart(): void {
		if (!this.head) {
			return;
		}

		const LinkedListNodeToRemove = this.head;

		if (LinkedListNodeToRemove.next) {
			LinkedListNodeToRemove.next.prev = null;
		} else {
			this.tail = null;
		}

		this.head = LinkedListNodeToRemove.next;
		this.deleteLinkedListNode(LinkedListNodeToRemove);
	}

	removeEnd(): void {
		if (!this.tail) {
			return;
		}

		const LinkedListNodeToRemove = this.tail;

		if (LinkedListNodeToRemove.prev) {
			LinkedListNodeToRemove.prev.next = null;
		} else {
			this.head = null;
		}

		this.tail = LinkedListNodeToRemove.prev;
		this.deleteLinkedListNode(LinkedListNodeToRemove);
	}

	toString(): string {
		let current = this.head;
		let string = "";
		while (current) {
			string += current.toString();
			if (current.next) {
				string += " -> ";
			}
			current = current.next;
		}
		return string;
	}
}

const ll: LinkedList = new LinkedList([30, 20, 55, 99, 10, 66]);
console.log(ll.toString());
console.log(ll.length);
ll.removeStart();
ll.removeEnd();
ll.insertStart(1);
ll.insertEnd(33);
console.log(ll.toString());
