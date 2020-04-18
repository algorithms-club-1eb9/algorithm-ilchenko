const content = [];

module.exports = class {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
		this.removed = false;
	}

	add(node) {
		if (node.value < this.value) {
			if (this.left == null) {
				this.left = node;
			} else {
				this.left.add(node);
			}
		} else if (node.value > this.value) {
			if (this.right == null) {
				this.right = node;
			} else {
				this.right.add(node);
			}
		}
	}

	search(val) {
		if (this.value === val) {
			if (this.removed) {
				return null;
			}
				return this;
		} else if (val < this.value && this.left != null) {
			return this.left.search(val);
		} else if (val > this.value && this.right != null) {
			return this.right.search(val);
		}
		return null;
	}
	getContent() {
		if (this.left != null) {
			this.left.getContent();
		}
		content.push(this.value);
		if (this.right != null) {
			this.right.getContent();
		}
		return content;
	}

	remove() {
		this.removed = true;
	}
};
