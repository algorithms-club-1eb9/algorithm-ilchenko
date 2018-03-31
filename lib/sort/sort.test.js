const should = require('should');
const rs = require('randomstring');
const algo = require('../../index.js');

function rn(n) {
	return Math.floor(Math.random() * n);
}

function compareLowerCase(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

function generateArray(count, str) {
	const arr = [];
	for (let i = 0; i < count; i += 1) {
		if (str) {
			arr.push(rs.generate({
				length: rn(10),
				charset: 'alphabetic',
			}));
		} else {
			arr.push(rn(1000));
		}
	}
	return {
		arr,
		arr_sorted: str
			? [...arr].sort((a, b) => compareLowerCase(a, b))
			: [...arr].sort((a, b) => a - b),
	};
}

describe('Bubble Sort', () => {
	it('Should return sorted array, Numbers', () => {
		const cond = generateArray(100);
		const sort = new algo.Sort(cond.arr);
		should(sort.bubbleSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Bubble Sort', () => {
	it('Should return sorted array, Strings', () => {
		const cond = generateArray(100, true);
		const sort = new algo.Sort(cond.arr);
		should(sort.bubbleSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});


describe('Bubble Sort', () => {
	it('Should return sorted array', () => {
		const array = [3, 1];
		const arraySorted = [1, 3];
		const sort = new algo.Sort(array);
		should(sort.bubbleSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Bubble Sort', () => {
	it('Should return array. Array has only 1 element', () => {
		const array = [3];
		const arraySorted = [3];
		const sort = new algo.Sort(array);
		should(sort.bubbleSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return sorted array, Numbers', () => {
		const cond = generateArray(100);
		const sort = new algo.Sort(cond.arr);
		should(sort.selectionSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return sorted array, Strings', () => {
		const cond = generateArray(100, true);
		const sort = new algo.Sort(cond.arr);
		should(sort.selectionSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return sorted array', () => {
		const array = [3, 1];
		const arraySorted = [1, 3];
		const sort = new algo.Sort(array);
		should(sort.selectionSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return array. Array has only 1 element', () => {
		const array = [3];
		const arraySorted = [3];
		const sort = new algo.Sort(array);
		should(sort.selectionSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Insertion Sort', () => {
	it('Should return sorted array, Numbers', () => {
		const cond = generateArray(100);
		const sort = new algo.Sort(cond.arr);
		should(sort.insertionSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Insertion Sort', () => {
	it('Should return sorted array, Strings', () => {
		const cond = generateArray(100, true);
		const sort = new algo.Sort(cond.arr);
		should(sort.insertionSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return sorted array', () => {
		const array = [3, 1];
		const arraySorted = [1, 3];
		const sort = new algo.Sort(array);
		should(sort.insertionSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Selection Sort', () => {
	it('Should return array. Array has only 1 element', () => {
		const array = [3];
		const arraySorted = [3];
		const sort = new algo.Sort(array);
		should(sort.insertionSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Shell Sort', () => {
	it('Should return sorted array, Numbers', () => {
		const cond = generateArray(20);
		const sort = new algo.Sort(cond.arr);
		should(sort.shellSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Shell Sort', () => {
	it('Should return sorted array, Strings', () => {
		const cond = generateArray(100, true);
		const sort = new algo.Sort(cond.arr);
		should(sort.shellSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Shell Sort', () => {
	it('Should return sorted array', () => {
		const array = [3, 1];
		const arraySorted = [1, 3];
		const sort = new algo.Sort(array);
		should(sort.shellSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Shell Sort', () => {
	it('Should return array. Array has only 1 element', () => {
		const array = [3];
		const arraySorted = [3];
		const sort = new algo.Sort(array);
		should(sort.shellSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Merge Sort', () => {
	it('Should return sorted array, Numbers', () => {
		const cond = generateArray(2);
		const sort = new algo.Sort(cond.arr);
		should(sort.mergeSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Merge Sort', () => {
	it('Should return sorted array, Strings', () => {
		const cond = generateArray(100, true);
		const sort = new algo.Sort(cond.arr);
		should(sort.mergeSort(cond.arr).toString()).be.eql(cond.arr_sorted.toString());
	});
});

describe('Merge Sort', () => {
	it('Should return sorted array', () => {
		const array = [3, 1];
		const arraySorted = [1, 3];
		const sort = new algo.Sort(array);
		should(sort.mergeSort(array).toString()).be.eql(arraySorted.toString());
	});
});

describe('Merge Sort', () => {
	it('Should return array. Array has only 1 element', () => {
		const array = [3];
		const arraySorted = [3];
		const sort = new algo.Sort(array);
		should(sort.mergeSort(array).toString()).be.eql(arraySorted.toString());
	});
});

