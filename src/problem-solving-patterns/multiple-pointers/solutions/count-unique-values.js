// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

// Solution with two pointers (two variables)

// 1. create a counter
// 2.
function countUniqueValuesWithTwoPointers(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let counter = 1;
	let i = 0;
	let x = 1;

	while (x < arr.length) {
		if (arr[i] !== arr[x]) {
			counter++;
		}
		i++;
		x++;
	}
	return counter;
}

// Bonus
function countUniqueValuesWithTwoPointersBonus(arr) {}

// Solution with one pointer (one variable)

function countUniqueValuesWithOnePointer(arr) {}

module.exports = {
	countUniqueValuesWithTwoPointers,
	countUniqueValuesWithOnePointer,
};
