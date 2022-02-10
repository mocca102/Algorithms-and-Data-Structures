module.exports = class QueueNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
};
