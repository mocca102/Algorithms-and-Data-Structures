class BinaryMaxHeap {
	constructor() {
		this.values = [];
	}

	isMinHeap() {
		if (this.values.length === 0) return false;
		for (const i = 0; i <= Math.floor(this.values.length / 2 - 1); i++) {
			if (this.values[i] > this.getLeftChildIndex(i)) return false;
			if (this.values[i] > this.getRightChildIndex(i)) return false;
		}
		return true;
	}

	swap(idx1, idx2) {
		[this.values[idx1], this.values[idx2]] = [
			this.values[idx2],
			this.values[idx1],
		];
	}

	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}

	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	insert(value) {
		this.values.push(value);
		if (this.values.length > 1) {
			this.bubbleUp();
		}
		return this.values;
	}

	extractMax() {
		if (this.values.length > 0) {
			this.swap(0, this.values.length - 1);
			const poppedMin = this.values.pop();
			this.sinkDown();
			return poppedMin;
		}
	}

	bubbleUp(
		childIndex = this.values.length - 1,
		parentIndex = this.getParentIndex(childIndex)
	) {
		if (this.values[childIndex] < this.values[parentIndex]) {
			this.swap(childIndex, parentIndex);
			if (this.parentIndex > 0) {
				this.bubbleUp(parentIndex, this.getParentIndex(parentIndex));
			}
		}
	}

	sinkDown(parentIndex = 0) {
		const parentValue = this.values[parentIndex];
		const leftChildIndex = this.getLeftChildIndex(parentIndex);
		const rightChildIndex = this.getRightChildIndex(parentIndex);
		const leftChildValue = this.values[leftChildIndex];
		const rightChildValue = this.values[rightChildIndex];

		let swapIndex;
		if (parentValue > leftChildValue && parentValue > rightChildValue) {
			swapIndex =
				leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex;
		} else {
			if (parentValue > leftChildValue) {
				swapIndex = leftChildIndex;
			}
			if (parentValue > rightChildValue) {
				swapIndex = rightChildIndex;
			}
		}
		if (swapIndex) {
			this.swap(parentIndex, swapIndex);
			this.sinkDown(swapIndex);
		}
	}
}
