module.exports = class {
	constructor() {
		this.priority = {
			'*': 14,
			'/': 14,
			'-': 13,
			'+': 13,
		};
		this.buffer = [];
	}

	isDigit(ch) {
		return /\d/.test(ch);
	}

	isOperator(ch) {
		return /\+|-|\*|\/|\^/.test(ch);
	}

	isLeftParenthesis(ch) {
		return (ch === '(');
	}

	isRightParenthesis(ch) {
		return (ch === ')');
	}

	tokenize(str) {
		if (!str) return false;
		const result = [];
		const tokens = str.replace(/\s+/g, '').split('');
		tokens.forEach(token => {
			if (this.isDigit(token)) {
				this.buffer.push(token);
			} else if (this.isOperator(token)) {
				if (this.buffer.length) this.clearBuffer(result);
				result.push(token);
			} else if (this.isLeftParenthesis(token)) {
				result.push(token);
			} else if (this.isRightParenthesis(token)) {
				if (this.buffer.length) this.clearBuffer(result);
				result.push(token);
			}
		});

		if (this.buffer.length) {
			this.clearBuffer(result);
		}
		return result;
	}

	parse(str) {
		const tokens = this.tokenize(str);
		const queue = [];
		const stack = [];
		if (!tokens) return false;
		tokens.forEach(token => {
			if (this.isDigit(token)) {
				queue.push(token);
			} else if (this.isOperator(token)) {
				let last = this.getLast(stack);
				while (last && (this.isOperator(last)) && (this.priority[token] <= this.priority[last])) {
					queue.push(stack.pop());
					last = this.getLast(stack);
				}
				stack.push(token);
			} else if (this.isLeftParenthesis(token)) {
				stack.push(token);
			} else if (this.isRightParenthesis(token)) {
				let last = this.getLast(stack);
				while (last && !this.isLeftParenthesis(last)) {
					queue.push(stack.pop());
					last = this.getLast(stack);
				}

				stack.pop();
			}
		});
		return queue.concat(stack.reverse());
	}

	clearBuffer(arr) {
		arr.push(this.buffer.join(''));
		this.buffer = [];
	}

	getLast(array) {
		return array.slice(-1)[0];
	}

	binary(a, b, token) {
		const _a = Number(a);
		const _b = Number(b);

		switch (token) {
			case '*': {
				return _a * _b;
			}
			case '/': {
				return _a / _b;
			}
			case '-': {
				return _a - _b;
			}
			case '+': {
				return _a + _b;
			}
			default: {
				return false;
			}
		}
	}

	calculate(str) {
		const ex = this.parse(str);
		if (!ex) return undefined;
		console.log(ex);
		for (let i = 0; i < ex.length; i += 1) {
			if (this.isOperator(ex[i])) {
				const spliceIndex = i - 2;
				if (spliceIndex < 0) return undefined;
				ex.splice(i - 2, 3, this.binary(ex[i - 2], ex[i - 1], ex[i]));
				console.log(ex);
				i -= 2;
			}
		}
		return Number(ex[0]);
	}
};
