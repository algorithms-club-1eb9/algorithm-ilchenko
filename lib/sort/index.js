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
				if (this.less(arr[j], arr[j + 1])) {
					this.swap(arr, j, j + 1);
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
				if (this.less(arr[min], arr[j])) {
					min = j;
				}
			}
			if (i !== min) {
				this.swap(arr, i, min);
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
				if (this.less(arr[j], value)) {
					this.swap(arr, j, j + 1);
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
					if (this.less(arr[j - k], arr[j])) {
						this.swap(arr, j, j - k);
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

		return this.merge(
			this.mergeSort(right),
			this.mergeSort(left),
		);
	}

	quickSort(arr, left = 0, right = arr.length - 1) {
		if (arr.length === 1) {
			return arr;
		}

		const index = this.partition(arr, left, right);

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

	less(a, b) {
		return b < a;
	}

	swap(arr, a, b) {
		const tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}

	merge(left, right) {
		const result = [];
		let indexLeft = 0;
		let indexRight = 0;
		while (indexLeft < left.length && indexRight < right.length) {
			if (left[indexLeft] < right[indexRight]) {
				result.push(left[indexLeft]);
				indexLeft += 1;
			} else {
				result.push(right[indexRight]);
				indexRight += 1;
			}
		}
		return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
	}

	partition(items, left, right) {
		const separator = items[Math.floor((right + left) / 2)];
		let i = left;
		let j = right;


		while (i <= j) {
			while (items[i] < separator) {
				i += 1;
			}
			while (items[j] > separator) {
				j -= 1;
			}
			if (i <= j) {
				this.swap(items, i, j);
				i += 1;
				j -= 1;
			}
		}
		return i;
	}
};
