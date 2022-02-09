const DoublyLinkedList = require("./Doubly-linked-list");

const list = new DoublyLinkedList();

describe("DoublyLinkedList", () => {
	it("should create a doubly linked list", () => {
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});
	it("should push a node to end of list", () => {
		list.push(1);
		expect(list).toMatchObject({
			head: { value: 1, next: null, prev: null },
			tail: { value: 1, next: null, prev: null },
			length: 1,
		});
	});
	it("should pop a node from end of list", () => {
		let poppedNode = list.pop();
		expect(poppedNode).toMatchObject({ value: 1, next: null, prev: null });
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
		poppedNode = list.pop();
		expect(poppedNode).toBe(undefined);
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
		list.push("hello");
		list.push("there");
		list.pop();
		expect(list).toMatchObject({
			head: { value: "hello", next: null, prev: null },
			tail: { value: "hello", next: null, prev: null },
			length: 1,
		});
	});
	it("should shift a node from start of list", () => {
		let removedNode = list.shift();
		expect(removedNode).toMatchObject({
			value: "hello",
			next: null,
			prev: null,
		});
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});
	it("should unshift a node to start of list", () => {
		let DLL = list.unshift("hello");
		expect(DLL).toMatchObject({
			head: { value: "hello", next: null, prev: null },
			tail: { value: "hello", next: null, prev: null },
			length: 1,
		});
	});
	it("should get a node at specified index", () => {
		let foundNode = list.get(3);
		expect(foundNode).toBe(null);
		expect(list).toMatchObject({
			head: { value: "hello", next: null, prev: null },
			tail: { value: "hello", next: null, prev: null },
			length: 1,
		});
		foundNode = list.get(0);
		expect(foundNode).toMatchObject({ value: "hello", next: null, prev: null });
	});
	it("should set a node value at specified index", () => {
		let setNode = list.set(3, 1);
		expect(setNode).toBe(false);
		setNode = list.set(0, 1);
		expect(list).toMatchObject({
			head: { value: 1, next: null, prev: null },
			tail: { value: 1, next: null, prev: null },
			length: 1,
		});
	});
});
