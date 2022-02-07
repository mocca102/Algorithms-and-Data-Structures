// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
	let lettersCounter = {};
	for (const letter of letters) {
		lettersCounter[letter] = lettersCounter[letter] + 1 || 1;
	}

	for (const letter of message) {
		if (lettersCounter[letter]) {
			lettersCounter[letter]--;
		} else {
			return false;
		}
	}

	return true;
}

module.exports = constructNote;
