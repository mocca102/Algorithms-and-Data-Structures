// Stack

// Implement the following methods on the Stack class:

// push - takes in a node and puts it at the top of the stack.
// Should return the new size of the stack.

// pop - removes the node at the top of the stack and returns the value of that node.

const StackNode = require("./Stack-node");

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new StackNode(value);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldFirst = this.first;
			this.first = newNode;
			this.first.next = oldFirst;
		}

		return ++this.size;
	}

	pop() {
		if (this.size === 0) return null;

		let poppedNode = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			poppedNode.next = null;
		}

		this.size--;
		return poppedNode.value;
	}
}

const stack = new Stack();

module.exports = Stack;
