class MinHeap {
	items: number[];

	constructor() {
		this.items = [];
	}

	private getLeftChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 1;
	}

	private getRightChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 2;
	}

	private getParentIndex(childIndex: number): number {
		return (childIndex - 1) / 2;
	}

	private hasLeftChild(index: number): boolean {
		return this.getLeftChildIndex(index) < this.items.length;
	}

	private hasRightChild(index: number): boolean {
		return this.getRightChildIndex(index) < this.items.length;
	}

	private hasParent(index: number): boolean {
		return this.getParentIndex(index) >= 0;
	}

	private leftChild(index: number): number {
		return this.items[this.getLeftChildIndex(index)];
	}

	private rightChild(index: number): number {
		return this.items[this.getRightChildIndex(index)];
	}

	private parent(index: number): number {
		return this.items[this.getParentIndex(index)];
	}

	private swap(index1: number, index2: number): void {
		[this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
	}

	private heapifyDown(): void {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
				smallerChildIndex = this.getRightChildIndex(index);
			}
			if (this.items[index] < this.items[smallerChildIndex]) {
				break;
			} else {
				this.swap(index, smallerChildIndex);
			}
			index = smallerChildIndex;
		}
	}

	private heapifyUp(): void {
		let index = this.items.length - 1;

		while (this.hasParent(index) && this.parent(index) > this.items[index]) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
		}
	}

	public peek(): number {
		if (this.items.length === 0) {
			throw Error("Empty Heap!");
		}
		return this.items[0];
	}
	public poll(): number {
		if (this.items.length === 0) {
			throw Error("Empty Heap!");
		}
		const item = this.items[0];
		this.items[0] = this.items.pop()!;
		this.heapifyDown();
		return item;
	}

	public add(item: number): void {
		this.items.push(item);
		this.heapifyUp();
	}
}

const minHeap: MinHeap = new MinHeap();
minHeap.add(4);
minHeap.add(2);
minHeap.add(1);
minHeap.add(3);
minHeap.add(6);
minHeap.add(5);
console.log(minHeap.items);
console.log(minHeap.peek());
console.log(minHeap.poll());
console.log(minHeap.items);
