// Queue

// Implement the following methods on the Queue class.
//
// enqueue
// This function adds the value to the end of the queue.
// This should be an O(1) operation and return the new size of the queue.

// dequeue
// This function removes the value at the beginning of the queue.
// This should be an O(1) operation and return the value removed.

const QueueNode = require("./Queue-node");

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new QueueNode(value);
		if (this.size === 0) {
			this.first = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;

		return ++this.size;
	}

	dequeue() {
		if (this.size === 0) return null;
		let dequeuedNode = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		dequeuedNode.next = null;

		this.size--;
		return dequeuedNode.value;
	}
}

const queue = new Queue();

module.exports = Queue;
