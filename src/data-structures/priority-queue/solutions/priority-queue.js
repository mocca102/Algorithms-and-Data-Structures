// Priority Queue

// Implement Priority Queue with Min Binary Heap
// Each Node has a value and a priority.  Use the priority to build the heap.

// enqueue
// This method accepts a value and priority, makes a new node,
// and puts it in the right spot based off of its priority.

// dequeue
// This method removes root element, returns it, and rearranges heap using priority.

// Additionally, the following method is implemented on the class:
// changePriority - changes priority of node

class PriorityQueueNode {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	isMinHeap() {
		if (this.values.length === 0) return false;
		for (const i = 0; i <= Math.floor(this.values.length / 2 - 1); i++) {
			if (this.values[i] > this.getLeftChildIndex(i)) return false;
			if (this.values[i] > this.getRightChildIndex(i)) return false;
		}
		return true;
	}

	swap(idx1, idx2) {
		[this.values[idx1], this.values[idx2]] = [
			this.values[idx2],
			this.values[idx1],
		];
	}

	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}

	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	enqueue(value, priority) {
		const newNode = new PriorityQueueNode(value, priority);
		this.values.push(newNode);
		if (this.values.length > 1) {
			this.bubbleUp();
		}
		return this;
	}

	dequeue() {
		if (this.values.length > 0) {
			this.swap(0, this.values.length - 1);
			const poppedMin = this.values.pop();
			this.sinkDown();
			return poppedMin;
		}
	}

	bubbleUp(
		childIndex = this.values.length - 1,
		parentIndex = this.getParentIndex(childIndex)
	) {
		if (this.values[childIndex].priority < this.values[parentIndex].priority) {
			this.swap(childIndex, parentIndex);
			if (this.parentIndex > 0) {
				this.bubbleUp(parentIndex, this.getParentIndex(parentIndex));
			}
		}
	}

	sinkDown(parentIndex = 0) {
		const parentValue = this.values[parentIndex];
		const leftChildIndex = this.getLeftChildIndex(parentIndex);
		const rightChildIndex = this.getRightChildIndex(parentIndex);
		const leftChild = this.values[leftChildIndex]?.priority;
		const rightChild = this.values[rightChildIndex]?.priority;

		let swapIndex;
		if (parentValue > leftChild && parentValue > rightChild) {
			swapIndex = leftChild < rightChild ? leftChildIndex : rightChildIndex;
		} else {
			if (parentValue > leftChild) {
				swapIndex = leftChildIndex;
			}
			if (parentValue > rightChild) {
				swapIndex = rightChildIndex;
			}
		}
		if (swapIndex) {
			this.swap(parentIndex, swapIndex);
			this.sinkDown(swapIndex);
		}
	}

	printPriorityQueue() {
		for (const item of this.values) {
			console.log(`${item.value} - ${item.priority}`);
		}
	}
}

const priorityQueue = new PriorityQueue()
	.enqueue("cat", 1)
	.enqueue("dog", 2)
	.enqueue("fish", 3)
	.enqueue("rat", 4)
	.enqueue("horse", 5)
	.enqueue("squirrel", 6)
	.enqueue("snake", 2);

priorityQueue.printPriorityQueue(); // cat - 1, dog - 2, snake - 2, rat - 4, horse - 5, squirrel - 6, fish - 3
priorityQueue.enqueue("crow", 4).enqueue("rabbit", 3);
priorityQueue.printPriorityQueue(); // cat - 1, dog - 2, snake - 2, rabbit - 3, horse - 5, squirrel - 6, crow - 4, rat - 4
console.log(priorityQueue.dequeue());
priorityQueue.printPriorityQueue(); // dog - 2, rabbit - 3, snake - 2, rat - 4, horse - 5, squirrel - 6, crow - 4
