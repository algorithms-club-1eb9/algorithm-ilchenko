const helper = require('../../helper');

module.exports = class {
	constructor(options) {
		this.init(options);
		this.content = [];
	}

	add(el) {
		this.content.push(el);
		this.bubble(this.size() - 1);
	}

	get() {
		let result = this.content[ 0 ];
		let end = this.content.pop();
		if (this.size() > 0) {
			this.content[ 0 ] = end;
			this.sink(0);
		}
		return result;
	}

	remove(el) {
		let length = this.size();
		let found = false;
		for (let i = 0; i < length; i++) {
			if (this.content[ i ] !== el) continue;
			found = true;
			let end = this.content.pop();
			if (i === length - 1) break;
			this.content[ i ] = end;
			this.bubble(i);
			this.sink(i);
			break;
		}
		return found ? el : undefined;
	}

	bubble(index) {
		let el = this.content[ index ];

		while (index > 0) {
			const parentIndex = this.getParentIndex(index);
			const parent = this.content[ parentIndex ];
			if (!this.less(parent, el)) {
				break;
			} else {
				this.swap(this.content, index, parentIndex)
				index = parentIndex;
			}
		}
	}

	sink(index) {

		let length = this.size(),
			el = this.content[ index ];

		while (true) {

			const ci = this.getChildrenIndices(index)

			let toSwap = null;

			if (ci.first < length && ci.second < length) {
				const [child1, child2] = [this.content[ci.first], this.content[ci.second]];
				toSwap = this.less(child1, child2) ? ci.second : ci.first;
			} else if (ci.first < length) {
				toSwap = ci.first;
			}


			if (toSwap === null) break;

			if (this.less(el, this.content[toSwap])) {
				this.swap(this.content, index, toSwap);
				index = toSwap;
			} else break;
		}
	}

	getParentIndex(index) {
		return Math.floor((index + 1) / 2) - 1
	}
	getChildrenIndices(index) {
		const second = (index + 1) * 2
		return {
			second,
			first: second - 1
		}
	}

	init(options) {
		const defaults = {
			less(a, b) {return helper.less(a, b)},
			swap(arr, a, b) {return helper.swap(arr, a, b);},
			size() {return this.content.length}
		}

		const result = Object.assign({}, defaults, options)

		for (let key in result) {
			this[ key ] = result[ key ];
		}
	}

}