// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n^2)

function findLongestSubstringVersion1(str) {
	if (str.length === 0) {
		return 0;
	}
	let longestSubStr = 1;
	let subStr = [];
	for (const letter of str) {
		if (!subStr.find()) {
		}
	}
}

console.log(findLongestSubstringVersion1("")); // 0
console.log(findLongestSubstringVersion1("rithmschool")); // 7
console.log(findLongestSubstringVersion1("thisisawesome")); // 6

// Time Complexity - O(n)

function findLongestSubstringVersion2(str) {
	let obj = { [str[0]]: 1, [str[1]]: 1 };
	let i = 0;
	let j = 1;
	let substr;
	for (const letter of str) {
		if (!obj[letter]) {
			obj[letter] = 1;
		}
	}
}

console.log(findLongestSubstringVersion2("")); // 0
console.log(findLongestSubstringVersion2("rithmschool")); // 7
console.log(findLongestSubstringVersion2("thisisawesome")); // 6
