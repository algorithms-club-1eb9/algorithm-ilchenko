const Node = require('./particle');

module.exports = class {
	constructor() {
		this.root = null;
		this.content = [];
	}

	add(el) {
		const node = new Node(el);
		if (this.root == null) {
			this.root = node;
		} else {
			this.root.add(node);
		}
	}
	getContent() {
		return this.root.getContent();
	}
	search(val) {
		return this.root.search(val);
	}

	remove(val) {
		const node = this.root.search(val);
		if (node != null) {
			node.remove();
		}
	}
};
