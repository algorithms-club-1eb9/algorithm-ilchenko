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
	it('Should calculate the string, multi-digit chars', () => {

		const calculator = new algo.Calculator();
		// calculator.calculate('2 - 3 + 4 - 1 + 23 + 23 + 3')
		should(calculator.calculate('2 - 3 + 4 - 1 + 23 + 22 + 350')).be.eql(397);
	});
});

describe('Calculator', () => {
	it('Should calculate the string, simple multiplying & dividing', () => {

		const calculator = new algo.Calculator();
		// calculator.calculate('2 - 3 + 4 - 1 + 23 + 23 + 3')
		should(calculator.calculate('2+2 * 2 / 2')).be.eql(4);
	});
});

describe('Calculator', () => {
	it('Should calculate the string, multi-chars multiplying & dividing', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('22 - 11 * 3 + 450 / 2')).be.eql(214);
	});
});


describe('Calculator', () => {
	it('Should calculate the string, add parenthless', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('(2 + 2) * 2')).be.eql(8);
	});
});


describe('Calculator', () => {
	it('Should calculate the string, get error (operator at the end)', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('(2 + 2) * ')).be.eql(undefined);
	});
});

describe('Calculator', () => {
	it('Should calculate the string, get error (operator doesn\'t exist)', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('2 2')).be.eql(22);
	});
});

describe('Calculator', () => {
	it('Should calculate the string, get error (operator at the end, too much operators)', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('2 2 * - 27 03 15 3 * 0 - 12')).be.eql(undefined);
	});
});

describe('Calculator', () => {
	it.only('Should calculate the string, get error (empty string)', () => {

		const calculator = new algo.Calculator();
		should(calculator.calculate('')).be.eql(undefined);
	});
});