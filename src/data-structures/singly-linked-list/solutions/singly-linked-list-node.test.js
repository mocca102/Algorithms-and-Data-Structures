const { SinglyLinkedList, Node } = require("./singly-linked-list");
jest.mock("./singly-linked-list").SinglyLinkedList;

test("SinglyLinkedList", () => {
	const list = new SinglyLinkedList();

	expect(list).toMatchObject({ head: null, tail: null, length: 0 });
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
