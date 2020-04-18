module.exports = {
	less(a, b) {
		return b < a;
	},

	swap(arr, a, b) {
		const tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	},

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
	},

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
}