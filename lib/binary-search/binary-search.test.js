const should = require('should');
const algo = require('../../index.js');

describe('Binary search', () => {
	it('should return searched number', () => {
		const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7], 4);
		should(elementIndex).be.eql(3);
	});
});

describe('Binary search', () => {
	it.only('should return searched number 0, (one element in array)', () => {
		const elementIndex = algo.binarySearch([4], 4);
		should(elementIndex).be.eql(0);
	});
});

describe('Binary search', () => {
	it('should return -1 (no elements in sequance)', () => {
		const elementIndex = algo.binarySearch([], 4);
		should(elementIndex).be.eql(-1);
	});
});

describe('Binary search', () => {
	it('should return -1 (no elements in sequance)', () => {
		const elementIndex = algo.binarySearch([], 0);
		should(elementIndex).be.eql(-1);
	});
});
