const fs = require('fs');

const message = {
	read_error: 'Can\'t read file. File doesn\'t exist or it hasn\'t permissions to read!',
	validate_error: 'File is NOT valid!',
	validate_success: 'File is VALID!',
};

module.exports = class {
	constructor(dir, file) {
		this.path = `${__dirname}/../${dir}/${file}`;
		this.text = '';
	}

	checkAccess() {
		try {
			fs.accessSync(this.path, fs.constants.R_OK || fs.constants.W_OK);
			return true;
		} catch (err) {
			return false;
		}
	}

	validate() {
		const matches = ['[', ']', '{', '}', '(', ')'];
		const brackets = {
			array: [],
			couples: {
				']': '[',
				'}': '{',
				')': '(',
			},
		};

		if (this.checkAccess(this.path)) {
			this.text = fs.readFileSync(this.path).toString();
		} else {
			return message.read_error;
		}

		for (let i = 0; i < this.text.length; i += 1) {
			const c = this.text[i];
			if (matches.some(el => el === this.text[i])) {
				if (brackets.array[brackets.array.length - 1]
					&& brackets.array[brackets.array.length - 1] === brackets.couples[c]) {
					brackets.array.pop();
				} else {
					brackets.array.push(this.text[i]);
				}
			}
		}
		if (brackets.array.length) {
			return message.validate_error;
		}
		return message.validate_success;
	}
};
