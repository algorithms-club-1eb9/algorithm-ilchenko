const helper = require('../../helper');

module.exports = class {
	constructor(array) {
		this.array = array;
	}

	bubbleSort(arr = this.array) {
		if (arr.length === 1) {
			return arr;
		}
		for (let i = 0; i < arr.length; i += 1) {
			let swap = false;
			for (let j = 0; j < arr.length - 1; j += 1) {
				if (helper.less(arr[j], arr[j + 1])) {
					helper.swap(arr, j, j + 1);
					swap = true;
				}
			}
			if (!swap) break;
		}
		return arr;
	}

	selectionSort(arr = this.array) {
		let min = null;
		if (arr.length === 1) {
			return arr;
		}
		for (let i = 0; i < arr.length; i += 1) {
			min = i;
			for (let j = i + 1; j < arr.length; j += 1) {
				if (helper.less(arr[min], arr[j])) {
					min = j;
				}
			}
			if (i !== min) {
				helper.swap(arr, i, min);
			}
		}
		return arr;
	}

	insertionSort(arr = this.array) {
		if (arr.length === 1) {
			return arr;
		}
		for (let i = 0; i < arr.length; i += 1) {
			const value = arr[i];
			for (let j = i - 1; j > -1; j -= 1) {
				if (helper.less(arr[j], value)) {
					helper.swap(arr, j, j + 1);
				} else {
					continue;
				}
			}
		}
		return arr;
	}

	shellSort(arr = this.array) {
		let x = 1;
		let k = 1;
		if (arr.length === 1) {
			return arr;
		}
		while (k < arr.length / 2) {
			k = (3 * x) + 1;
			x += 1;
		}
		while (k > 0) {
			for (let i = k; i < arr.length; i += k) {
				for (let j = i; j > 0; j -= k) {
					if (helper.less(arr[j - k], arr[j])) {
						helper.swap(arr, j, j - k);
					}
				}
			}
			k -= 3;
		}

		return arr;
	}

	mergeSort(arr = this.array) {
		if (arr.length === 1) {
			return arr;
		}
		const middle = Math.floor(arr.length / 2);

		const left = arr.slice(0, middle);
		const right = arr.slice(middle);

		return helper.merge(
			this.mergeSort(right),
			this.mergeSort(left),
		);
	}

	quickSort(arr, left = 0, right = arr.length - 1) {
		if (arr.length === 1) {
			return arr;
		}

		const index = helper.partition(arr, left, right);

		if (left < index - 1) {
			this.quickSort(arr, left, index - 1);
		}

		if (index < right) {
			this.quickSort(arr, index, right);
		}

		return arr;
	}

	heapSort(arr = this.array) {
		if (arr.length === 1) {
			return arr;
		}
		return arr;
	}
};
