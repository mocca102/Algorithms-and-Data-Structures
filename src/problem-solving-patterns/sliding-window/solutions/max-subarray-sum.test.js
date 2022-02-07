const maxSubarraySum = require("./max-subarray-sum");

test("Max Subarray", () => {
	expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
	expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
	expect(maxSubarraySum([2, 3], 3)).toBe(null);
});
