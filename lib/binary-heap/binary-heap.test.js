const should = require('should');
const algo = require('../../index.js');

describe('Binary heap', () => {
	it('Should add el to heap', () => {
		const heap = new algo.BinaryHeap();
		heap.add(2);
		should(heap.content[0]).be.eql(2);
	});
});

describe('Binary heap', () => {
	it('Should add el to heap', () => {
		const heap = new algo.BinaryHeap();
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [2, 3, 4, 5, 8, 11, 5, 19, 77];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		console.log(heap.content);
		should(match).be.eql(true);
	});
});

describe('Binary heap', () => {
	it('Should add el to heap with custom "less function"', () => {
		const heap = new algo.BinaryHeap({
			less(a, b) {
				return (a < b);
			},
		});
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [77, 19, 11, 8, 3, 5, 4, 2, 5];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		console.log(heap.content);
		should(match).be.eql(true);
	});
});


describe('Binary heap', () => {
	it('Should add el to heap (negative digits)', () => {
		const heap = new algo.BinaryHeap();
		const array = [-2, 8, -5, 19, -3, 11, 4, 0, 5, 77];
		const resultArray = [-5, -3, -2, 0, 8, 11, 4, 19, 5, 77];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		console.log(heap.content);
		should(match).be.eql(true);
	});
});


describe('Binary heap', () => {
	it('Should get items by queue and refactor heap', () => {
		const heap = new algo.BinaryHeap();
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [8, 19, 11, 77];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		should(heap.get()).be.eql(2);
		console.log(heap.content);
		should(heap.get()).be.eql(3);
		console.log(heap.content);
		should(heap.get()).be.eql(4);
		console.log(heap.content);
		should(heap.get()).be.eql(5);
		console.log(heap.content);
		should(heap.get()).be.eql(5);
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		should(match).be.eql(true);
	});
});

describe('Binary heap', () => {
	it('Should get items by queue and refactor heap with custom "less function"', () => {
		const heap = new algo.BinaryHeap({
			less(a, b) {
				return (a < b);
			},
		});
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [8, 5, 5, 4, 3, 2];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		should(heap.get()).be.eql(77);
		console.log(heap.content);
		should(heap.get()).be.eql(19);
		console.log(heap.content);
		should(heap.get()).be.eql(11);
		console.log(heap.content);
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		should(match).be.eql(true);
	});
});


describe('Binary heap', () => {
	it('Should remove els and refactor heap', () => {
		const heap = new algo.BinaryHeap();
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [3, 5, 5, 19, 8, 11];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		should(heap.remove(2)).be.eql(2);
		console.log(heap.content);
		should(heap.remove(21)).be.eql(undefined);
		console.log(heap.content);
		should(heap.remove(77)).be.eql(77);
		console.log(heap.content);
		should(heap.remove(4)).be.eql(4);
		console.log(heap.content);
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		should(match).be.eql(true);
	});
});


describe('Binary heap', () => {
	it('Should remove els and refactor heap by custom function', () => {
		const heap = new algo.BinaryHeap({
			less(a, b) {
				return a < b;
			},
		});
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [19, 5, 11, 4, 3, 5];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		should(heap.remove(2)).be.eql(2);
		console.log(heap.content);
		should(heap.remove(21)).be.eql(undefined);
		console.log(heap.content);
		should(heap.remove(77)).be.eql(77);
		console.log(heap.content);
		should(heap.remove(8)).be.eql(8);
		console.log(heap.content);
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		should(match).be.eql(true);
	});
});
