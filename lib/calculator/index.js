module.exports = class {
	constructor() {
		this.result = 0;
		this.operators = [ '*', '/', '-', '+' ];
		this.priority = {
			'*': 14,
			'/': 14,
			'-': 13,
			'+': 13
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
		return (ch === "(");
	}
	isRightParenthesis(ch) {
		return (ch == ")");
	}
	tokenize(str) {
		let result = [];
		let tokens = str.replace(/\s+/g, "").split('');

		tokens.forEach(token => {
			if (this.isDigit(token)) {
				this.buffer.push(token);
			} else if (this.isOperator(token)){
				this.clearBuffer(result);
				result.push(token);
			}
		})

		if (this.buffer.length) {
			this.clearBuffer(result)
		}
		return result;
	}
	parse(str){
		let tokens = this.tokenize(str);
		for (let i = 0; i < tokens.length;) {
			if (this.isOperator(tokens[i])) {
				this.swap(tokens, i, i+1);
				i+=2;
			} else {
				i+=1;
			}
		}
		// console.log(tokens)
		return tokens;
	}
	clearBuffer(arr) {
		arr.push(this.buffer.join(''));
		this.buffer = [];
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
		}
	}

	calculate(str) {
		const ex = this.parse(str);
		for (let i = 0; i < ex.length; i++) {
			if (this.operators.some(el => el === ex[ i ])) {
				ex.splice(i - 2, 3, this.binary(ex[ i - 2 ], ex[ i - 1 ], ex[ i ]));
				i = 0;
			}
		}
		console.log(ex)
		return ex[0];
	}

	swap(arr, i_1, i_2) {
		const tmp = arr[ i_1 ];
		arr[ i_1 ] = arr[ i_2 ];
		arr[ i_2 ] = tmp;
	}

}