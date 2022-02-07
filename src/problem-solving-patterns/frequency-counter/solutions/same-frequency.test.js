const sameFrequency = require("./same-frequency");

describe("Are two numbers of same frequency", () => {
	it("Is same frequency", () => {
		expect(sameFrequency(34, 14)).toBe(false);
	});
	it("Is same frequency", () => {
		expect(sameFrequency(3589578, 5879385)).toBe(true);
	});
});
