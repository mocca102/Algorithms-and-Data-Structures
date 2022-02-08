const SinglyLinkedList = require("./singly-linked-list");

const list = new SinglyLinkedList();

describe("SinglyLinkedList", () => {
	it("should create a singly linked list", () => {
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});

	it("should push a nodes to end of list", () => {
		list.push(4);
		expect(list).toMatchObject({
			head: { value: 4, next: null },
			tail: { value: 4, next: null },
			length: 1,
		});
		list.push(2);
		expect(list).toMatchObject({
			head: { value: 4, next: { value: 2, next: null } },
			tail: { value: 2, next: null },
			length: 2,
		});
		list.push(7);
		expect(list).toMatchObject({
			head: { value: 4, next: { value: 2, next: { value: 7, next: null } } },
			tail: { value: 7, next: null },
			length: 3,
		});
	});

	it("should return node at specified index", () => {
		const node = list.get(1);
		expect(node).toMatchObject({ value: 2, next: { value: 7, next: null } });
	});

	it("should shift first node from list and return it", () => {
		const shiftedNode = list.shift();
		expect(list).toMatchObject({
			head: { value: 2, next: { value: 7, next: null } },
			tail: { value: 7, next: null },
			length: 2,
		});
		expect(shiftedNode).toMatchObject({
			value: 4,
			next: null,
		});
		list.shift();
		list.shift();
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});

	it("should return node at specified index", () => {
		const node = list.get(0);
		expect(node).toBe(null);
	});

	it("should unshift node to list start", () => {
		list.unshift(7);
		list.unshift(2);
		list.unshift(4);
		expect(list).toMatchObject({
			head: { value: 4, next: { value: 2, next: { value: 7, next: null } } },
			tail: { value: 7, next: null },
			length: 3,
		});
	});

	it("should pop last node from list and return it", () => {
		const poppedNode = list.pop();
		expect(list).toMatchObject({
			head: { value: 4, next: { value: 2, next: null } },
			tail: { value: 2, next: null },
			length: 2,
		});
		expect(poppedNode).toMatchObject({ value: 7, next: null });
		list.pop();
		expect(list).toMatchObject({
			head: { value: 4, next: null },
			tail: { value: 4, next: null },
			length: 1,
		});
		list.pop();
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});

	it("should set node at specified index", () => {
		list.push(1);
		const isSet = list.set(0, 4);
		expect(list).toMatchObject({
			head: { value: 4, next: null },
			tail: { value: 4, next: null },
			length: 1,
		});
		expect(isSet).toBe(true);
		const isSet2 = list.set(1, 7);
		expect(list).toMatchObject({
			head: { value: 4, next: null },
			tail: { value: 4, next: null },
			length: 1,
		});
		expect(isSet2).toBe(false);
	});

	it("should insert a new node at specified index", () => {
		let isInserted = list.insert(2, "hello");
		expect(isInserted).toBe(false);
		isInserted = list.insert(1, "hello");
		expect(isInserted).toBe(true);
		expect(list).toMatchObject({
			head: { value: 4, next: { value: "hello", next: null } },
			tail: { value: "hello", next: null },
			length: 2,
		});
		isInserted = list.insert(1, "hey");
		expect(isInserted).toBe(true);
		expect(list).toMatchObject({
			head: {
				value: 4,
				next: { value: "hey", next: { value: "hello", next: null } },
			},
			tail: { value: "hello", next: null },
			length: 3,
		});
		isInserted = list.insert(0, "you");
		expect(isInserted).toBe(true);
		expect(list).toMatchObject({
			head: {
				value: "you",
				next: {
					value: 4,
					next: { value: "hey", next: { value: "hello", next: null } },
				},
			},
			tail: { value: "hello", next: null },
			length: 4,
		});
	});
	it("remove node at specified index", () => {
		let isRemoved = list.remove();
		expect(isRemoved).toBe(undefined);
		isRemoved = list.remove(1);
		expect(isRemoved).toMatchObject({
			value: 4,
			next: null,
		});
		expect(list).toMatchObject({
			head: {
				value: "you",
				next: { value: "hey", next: { value: "hello", next: null } },
			},
			tail: { value: "hello", next: null },
			length: 3,
		});
	});

	it("revers the list", () => {
		list.reverse();
		expect(list).toMatchObject({
			head: {
				value: "hello",
				next: { value: "hey", next: { value: "you", next: null } },
			},
			tail: { value: "you", next: null },
			length: 3,
		});
		list.pop();
		list.reverse();
		expect(list).toMatchObject({
			head: {
				value: "hey",
				next: { value: "hello", next: null },
			},
			tail: { value: "hello", next: null },
			length: 2,
		});
		list.pop();
		list.reverse();
		expect(list).toMatchObject({
			head: {
				value: "hey",
				next: null,
			},
			tail: { value: "hey", next: null },
			length: 1,
		});
		list.pop();
		list.reverse();
		expect(list).toMatchObject({
			head: null,
			tail: null,
			length: 0,
		});
	});
});
