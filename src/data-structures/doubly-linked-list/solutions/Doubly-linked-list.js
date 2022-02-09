const DoublyLinkedListNode = require("./Doubly-linked-list-node");

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		let newNode = new DoublyLinkedListNode(value);
		if (this.length > 0) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		} else {
			this.tail = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return;
		let nodeToRemove = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = nodeToRemove.prev;
			this.tail.next = null;
			nodeToRemove.prev = null;
		}

		this.length--;
		return nodeToRemove;
	}

	shift() {
		if (this.length === 0) return;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(value) {
		let newNode = new DoublyLinkedListNode(value);
		let oldHead = this.head;
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			oldHead.prev = newNode;
			newNode.next = oldHead;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		if (index <= this.length / 2) {
			let current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
			return current;
		} else {
			let current = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				current = current.prev;
			}
			return current;
		}
	}

	set(index, value) {
		const node = this.get(index);
		if (node) {
			node.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new DoublyLinkedListNode(value);
		let prevNode = this.get(index - 1);
		let nextNode = prevNode.next;
		newNode.next = nextNode;
		newNode.prev = prevNode;
		prevNode.next = newNode;
		nextNode.prev = newNode;

		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let nodeToRemove = this.get(index);
		let prevNode = nodeToRemove.prev;
		let nextNode = nodeToRemove.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;

		nodeToRemove.next = null;
		nodeToRemove.prev = null;
		this.length--;
		return nodeToRemove;
	}
}

const doublyLinkedList = new DoublyLinkedList();

module.exports = DoublyLinkedList;
