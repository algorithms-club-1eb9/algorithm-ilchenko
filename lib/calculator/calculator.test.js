const should = require('should');
const algo = require('../../index.js');


describe('Calculator', () => {
	it('Should calculate the string', () => {

		const calculator = new algo.Calculator();

		should(calculator.calculate('2 + 2')).be.eql(4);
	});
});

describe('Calculator', () => {
	it('Should calculate the string', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('2 + 2 + 3')).be.eql(7);
	});
});

describe('Calculator', () => {
	it.only('Should calculate the string, multi-digit chars', () => {

		const calculator = new algo.Calculator();
		// calculator.calculate('2 - 3 + 4 - 1 + 23 + 23 + 3')
		should(calculator.calculate('2 - 3 + 4 - 1 + 23 + 22 + 350')).be.eql(397);
	});
});