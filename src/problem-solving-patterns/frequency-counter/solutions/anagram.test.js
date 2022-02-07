const validAnagram = require("./anagram");

test("Is a valid anagram", () => {
	expect(validAnagram("", "")).toBe(true);
	expect(validAnagram("rat", "car")).toBe(false);
	expect(validAnagram("carz", "car")).toBe(false);
	expect(validAnagram("anagram", "nagaram")).toBe(true);
});
