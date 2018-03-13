const message = { error: 'Cannot find item at this position.' };

// function logList(list) {
// 	console.log(list.data);
// 	if (list.next) {
// 		logList(list.next);
// 	}
// }
class Item {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}


module.exports = class {
	constructor() {
		this.head = null;
		this._length = 0;
	}

	push(value) {
		const item = new Item(value);
		let current = this.head;

		if (!current) {
			this.head = item;
			this._length += 1;

			return item.data;
		}

		while (current.next) {
			current = current.next;
		}

		current.next = item;
		this._length += 1;

		return item.data;
	}

	insert(value, position) {
		const length = this._length;
		const toInsert = new Item(value);
		let current = this.head;
		let beforeInserted = null;
		let index = 0;

		if (position < 0 || position > length) {
			return message.error;
		}

		if (position === 0) {
			toInsert.next = current;
			this.head = toInsert;

			this._length += 1;

			return {
				beforeInserted: beforeInserted ? beforeInserted.data : undefined,
				afterInserted: toInsert.next ? toInsert.next.data : undefined,
				length: this._length,
			};
		}

		while (index < position) {
			beforeInserted = current;
			current = current.next;
			index += 1;
		}

		toInsert.next = current;
		beforeInserted.next = toInsert;

		this._length += 1;

		return {
			beforeInserted: beforeInserted ? beforeInserted.data : undefined,
			afterInserted: toInsert.next ? toInsert.next.data : undefined,
			length: this._length,
		};
	}

	unshift(value) {
		return this.insert(value, 0);
	}

	get(position) {
		const length = this._length;
		let current = this.head;
		let index = 0;


		if (length === 0 || position < 0 || position >= length) {
			return message.error;
		}

		while (index < position) {
			current = current.next;
			index += 1;
		}

		return current.data;
	}

	set(value, position) {
		const length = this._length;
		let current = this.head;
		let index = 0;

		if (length === 0 || position < 0 || position >= length) {
			return message.error;
		}
		while (index < position) {
			current = current.next;
			index += 1;
		}

		current.data = value;

		return {
			changed: current.data,
			next: current.next ? current.next.data : undefined,
			length: this._length,
		};
	}

	remove(position) {
		const length = this._length;
		let current = this.head;
		let index = 0;
		let toDelete = null;
		let beforeToDelete = null;
		let deleted = null;

		if (position < 0 || position >= length) {
			return message.error;
		}

		if (position === 0) {
			this.head = current.next;
			toDelete = current;
			deleted = current;
			current = null;
			this._length -= 1;

			return {
				beforeToDelete: beforeToDelete ? beforeToDelete.data : undefined,
				deleted: toDelete.data,
				next: toDelete.next ? toDelete.next.data : undefined,
				length: this._length,
			};
		}

		while (index < position) {
			beforeToDelete = current;
			toDelete = current.next;
			current = current.next;
			index += 1;
		}

		beforeToDelete.next = toDelete.next;
		deleted = toDelete;
		toDelete = null;
		this._length -= 1;

		return {
			beforeToDelete: beforeToDelete ? beforeToDelete.data : undefined,
			deleted: deleted.data,
			next: deleted.next ? deleted.next.data : undefined,
			length: this._length,
		};
	}

	shift() {
		return this.remove(0);
	}

	pop() {
		return this.remove(this._length - 1);
	}
};
