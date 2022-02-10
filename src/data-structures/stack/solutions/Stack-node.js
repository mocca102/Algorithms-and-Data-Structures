module.exports = class StackNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
};
