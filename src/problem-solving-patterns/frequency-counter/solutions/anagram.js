// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

// 1. check if two words are of same length
// 2. store the count of letters in each word
// 3. compare the count of the letters of the two words if they're equal return true
function validAnagram(word1, word2) {
	if (word1.length !== word2.length) {
		return false;
	}

	const countFirst = {};
	const countSecond = {};

	for (const letter of word1) {
		countFirst[letter] = countFirst[letter] + 1 || 1;
	}
	for (const letter of word2) {
		countSecond[letter] = countSecond[letter] + 1 || 1;
	}

	for (const letter of word1) {
		if (countFirst[letter] !== countSecond[letter]) {
			return false;
		}
	}
	return true;
}

module.exports = validAnagram;
