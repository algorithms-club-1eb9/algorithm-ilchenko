const should = require('should');
const algo = require('../../index.js');
const message = {
	read_error: 'Can\'t read file. File doesn\'t exist or it hasn\'t permissions to read!',
	validate_error: 'File is NOT valid!',
	validate_success: 'File is VALID!'
};

describe('Brackets Validator', () => {
	it('Should read file and validate brackets, file is valid', () => {
		const bracketsValidator = new algo.BracketsValidator('../test-files/brackets-validator', 'true.js');
		should(bracketsValidator.validate()).be.eql(message.validate_success);
	});
});

describe('Brackets Validator', () => {
	it('Should read file and validate brackets, file is not valid', () => {
		const bracketsValidator = new algo.BracketsValidator('../test-files/brackets-validator', 'false.js');
		should(bracketsValidator.validate()).be.eql(message.validate_error);
	});
});

describe('Brackets Validator', () => {
	it.only('Should read file and validate brackets, file doesn\'t exist', () => {
		const bracketsValidator = new algo.BracketsValidator('../test-files/brackets-validator', 'undefined.js');
		should(bracketsValidator.validate()).be.eql(message.read_error);
	});
});