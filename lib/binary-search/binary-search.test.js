const should = require('should');
const algo = require('../../index.js');

describe('Binary search', () => {
	it('should return searched number', () => {
		const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7], 4);
		should(elementIndex).be.eql(3);
	});
});

describe('Binary search', () => {
	it('should return 0, searched el in first position', () => {
		const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7], 1);
		should(elementIndex).be.eql(0);
	});
});

describe('Binary search', () => {
	it('should return 6, searched el in last position', () => {
		const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7], 7);
		should(elementIndex).be.eql(6);
	});
});

describe('Binary search', () => {
	it('should return searched number 0, (one element in array)', () => {
		const elementIndex = algo.binarySearch([4], 4);
		should(elementIndex).be.eql(0);
	});
});

describe('Binary search', () => {
	it('should return -1 (no elements in sequance, searched el > 0)', () => {
		const elementIndex = algo.binarySearch([], 4);
		should(elementIndex).be.eql(-1);
	});
});

describe('Binary search', () => {
	it('should return -1 (no elements in sequance, searched el is 0)', () => {
		const elementIndex = algo.binarySearch([], 0);
		should(elementIndex).be.eql(-1);
	});
});
