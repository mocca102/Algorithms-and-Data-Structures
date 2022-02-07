const areThereDuplicates = require("./are-there-duplicates");

test("Are there duplicates", () => {
	expect(areThereDuplicates(1, 2, 3)).toBe(false);
	expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});
