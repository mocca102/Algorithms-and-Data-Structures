const Node = require("./singly-linked-list-node");

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
	}

	traverse() {
		let current = this.head;

		while (current) {
			current = current.next;
		}
	}

	pop() {
		if (!this.head) return;
		let current = this.head;
		let newTail;
		while (current.next) {
			newTail = current;
			current = current.next;
		}

		// current.next === null meaning list of length 1
		if (!newTail) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = newTail;
			this.tail.next = null;
		}

		this.length--;
		return current;
	}

	shift() {
		if (!this.head) return;
		const oldHead = this.head;
		const newHead = this.head.next;
		this.head.next = null;
		this.head = newHead;
		this.length--;

		// only one node in list
		if (!newHead) {
			this.tail = null;
		}

		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;

		if (this.length === 0) {
			this.tail = newNode;
		}
		this.length++;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		// i === index
		return current;
	}

	set(index, value) {
		const node = this.get(index);
		if (!node) return false;
		node.value = value;
		return true;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(value);
			return true;
		}
		if (index === 0) {
			this.unshift(value);
			return true;
		}
		const newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let nextNode = prevNode.next;
		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length || index === undefined) return;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let nodeToRemove = prevNode.next;
		prevNode.next = nodeToRemove.next;
		nodeToRemove.next = null;
		this.length--;
		return nodeToRemove;
	}

	reverse() {
		let current = this.head;
		this.tail = current;
		let prev = null;
		while (current) {
			let next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
	}
}

const x = new SinglyLinkedList();
x.push(1);
x.push(2);
x.push(3);
x.reverse();
module.exports = SinglyLinkedList;
