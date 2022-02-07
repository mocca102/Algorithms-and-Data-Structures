// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
	let countArgs = {};
	for (const arg of args) {
		if (countArgs[arg]) {
			return true;
		} else {
			countArgs = { ...countArgs, [arg]: arg };
		}
	}
	return false;
}

module.exports = areThereDuplicates;
