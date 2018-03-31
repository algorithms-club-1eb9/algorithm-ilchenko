module.exports = class {
	constructor(array) {
		this.array = array;
	}

	bubbleSort() {
		const arr = this.array;
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

	selectionSort() {
		const arr = this.array;
		let min = null;

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

	insertionSort() {
		const arr = this.array;
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

	shellSort() {
		const arr = this.array;
		let x = 1;
		let k = 1;
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
	mergeSort() {
		const arr = this.array;
		return arr;
	}
	quickSort() {
		const arr = this.array;
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
};
