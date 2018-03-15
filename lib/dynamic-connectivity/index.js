module.exports = class {
	constructor(items) {
		this.size = [];
		this.root = [];
		for (let i = 0; i <= items; i += 1) {
			this.size.push(1);
			this.root.push(i);
		}
	}
	findRoot(n) {
		while (n !== this.root[n]) {
			n = this.root[n];
		}
		return n;
	}

	findRootPathCompression(n) {
		let r = n;
		while (r !== this.root[r]) { r = this.root[r]; }
		// console.log('main root is', r);
		while (n !== r) {
			const _n = this.root[n];
			// console.log('changed root', n, ' to new root', r);
			this.root[n] = r;
			n = _n;
		}
		return n;
	}
	connect(a, b) {
		const _a = this.findRootPathCompression(a);
		const _b = this.findRootPathCompression(b);

		if (_a === _b) return; // already connected

		// console.log('connect', a, ' root is -', _a, 'with', b, ' root is -', _b);
		if (this.size[_a] < this.size[_b]) {
			this.root[_a] = _b;
			this.size[_b] += this.size[_a];
		} else {
			this.root[_b] = _a;
			this.size[_a] += this.size[_b];
		}

		// console.log('result', this.root);
		// console.log('sizes', this.size);
	}
	isConnected(a, b) {
		return this.findRootPathCompression(a) === this.findRootPathCompression(b);
	}
};
