// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

// 1. stringify the two numbers then split them into arrays then reduce them into frequency counted objects
// 3. compare the two frequency counted objs
function sameFrequency(num1, num2) {
	if (num1.toString().length !== num2.toString().length) {
		return false;
	}

	const firstCounter = num1
		.toString()
		.split("")
		.reduce((prev, cur) => {
			return { ...prev, [cur]: prev[cur]++ || 1 };
		}, {});

	const secondCounter = num2
		.toString()
		.split("")
		.reduce((prev, cur) => {
			return { ...prev, [cur]: prev[cur]++ || 1 };
		}, {});

	for (const letter of num1.toString().split("")) {
		if (firstCounter[letter] !== secondCounter[letter]) {
			return false;
		}
	}
	return true;
}

module.exports = sameFrequency;
