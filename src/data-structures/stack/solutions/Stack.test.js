const Stack = require("./Stack");

const stack = new Stack();

describe("Stack", () => {
	it("should create a stack", () => {
		expect(stack).toMatchObject({ first: null, last: null, size: 0 });
	});
});
