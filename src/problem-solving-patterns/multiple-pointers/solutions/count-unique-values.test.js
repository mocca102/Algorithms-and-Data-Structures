const { countUniqueValuesWithTwoPointers } = require("./count-unique-values");

describe("Count unique values", () => {
	it("count", () => {
		expect(countUniqueValuesWithTwoPointers([])).toBe(0);
	});
	it("count", () => {
		expect(countUniqueValuesWithTwoPointers([-2, -1, -1, 0, 1])).toBe(4);
	});
	it("count", () => {
		expect(
			countUniqueValuesWithTwoPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
		).toBe(7);
	});
});
