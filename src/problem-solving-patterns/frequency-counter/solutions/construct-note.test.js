const constructNote = require("./construct-note");

test("Construct note", () => {
	expect(constructNote("aa", "abc")).toBe(false);
	expect(constructNote("abc", "dcba")).toBe(true);
	expect(constructNote("aabbcc", "bcabcaddff")).toBe(true);
	expect(constructNote("aabbcc", "bc")).toBe(false);
});
