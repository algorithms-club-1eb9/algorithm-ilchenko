const should = require('should');
const algo = require('../../index.js');

const message = { error: 'Cannot find item at this position.' };
const data = ['ooohhhh list', 'linked', 'such a little linked list', 'doge', 'wow', 'linked list!', 'amazing', 'liiinked!'];

describe('Linked List push item', () => {
	it('Should return added item', () => {
		const linkedList = new algo.LinkedList();
		should(linkedList.push(22)).be.eql(22);
	});
});

describe('Linked List get item', () => {
	it('Should return searched item, position = random between first and last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const searchedIndex = Math.floor(Math.random() * data.length);
		should(linkedList.get(searchedIndex)).be.eql(data[searchedIndex]);
	});
});

describe('Linked List get item', () => {
	it('Should return error message, position < 0', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const searchedIndex = -1;
		should(linkedList.get(searchedIndex)).be.eql(message.error);
	});
});

describe('Linked List get item', () => {
	it('Should return error message, position > last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const searchedIndex = data.length;
		should(linkedList.get(searchedIndex)).be.eql(message.error);
	});
});


describe('Linked List get item', () => {
	it('Should return searched item, position last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const searchedIndex = data.length - 1;
		should(linkedList.get(searchedIndex)).be.eql(data[searchedIndex]);
	});
});

describe('Linked List remove item', () => {
	it('Should return removed item. Position first', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedIndex = 0;
		const removedItem = linkedList.remove(removedIndex);
		should(removedItem.deleted).be.eql(data[removedIndex]);
		should(removedItem.beforeToDelete).be.eql(data[removedIndex - 1]);
		should(removedItem.next).be.eql(data[removedIndex + 1]);
		should(removedItem.length).be.eql(data.length - 1);
	});
});

describe('Linked List remove item', () => {
	it('Should return removed item. Position last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedIndex = data.length - 1;
		const removedItem = linkedList.remove(removedIndex);
		should(removedItem.deleted).be.eql(data[removedIndex]);
		should(removedItem.beforeToDelete).be.eql(data[removedIndex - 1]);
		should(removedItem.next).be.eql(data[removedIndex + 1]);
		should(removedItem.length).be.eql(data.length - 1);
	});
});

describe('Linked List remove item', () => {
	it('Should return removed item. Position random between first and last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedIndex = Math.floor(Math.random() * data.length);
		const removedItem = linkedList.remove(removedIndex);

		should(removedItem.deleted).be.eql(data[removedIndex]);
		should(removedItem.beforeToDelete).be.eql(data[removedIndex - 1]);
		should(removedItem.next).be.eql(data[removedIndex + 1]);
		should(removedItem.length).be.eql(data.length - 1);
	});
});

describe('Linked List remove item', () => {
	it('Should return error, position < 0', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedIndex = -2;
		const removedItem = linkedList.remove(removedIndex);
		should(removedItem).be.eql(message.error);
	});
});

describe('Linked List remove item', () => {
	it('Should return error, position > last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedIndex = data.length;
		const removedItem = linkedList.remove(removedIndex);
		should(removedItem).be.eql(message.error);
	});
});


describe('Linked List insert item', () => {
	it('Should return inserted item. Position first', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedIndex = 0;
		const insertedItem = linkedList.insert('uhh such a new item!', insertedIndex);

		should(insertedItem.beforeInserted).be.eql(data[insertedIndex - 1]);
		should(insertedItem.afterInserted).be.eql(data[insertedIndex]);
		should(insertedItem.length).be.eql(data.length + 1);
	});
});

describe('Linked List insert item', () => {
	it('Should return inserted item. Position last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedIndex = data.length;
		const insertedItem = linkedList.insert('uhh such a new item!', insertedIndex);

		should(insertedItem.beforeInserted).be.eql(data[insertedIndex - 1]);
		should(insertedItem.afterInserted).be.eql(data[insertedIndex]);
		should(insertedItem.length).be.eql(data.length + 1);
	});
});

describe('Linked List insert item', () => {
	it('Should return inserted item. Position random between first and last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedIndex = Math.floor(Math.random() * data.length);
		const insertedItem = linkedList.insert('uhh such a new item!', insertedIndex);

		should(insertedItem.beforeInserted).be.eql(data[insertedIndex - 1]);
		should(insertedItem.afterInserted).be.eql(data[insertedIndex]);
		should(insertedItem.length).be.eql(data.length + 1);
	});
});

describe('Linked List insert item', () => {
	it('Should return error. Position < 0', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedIndex = -4;
		const insertedItem = linkedList.insert('uhh such a new item!', insertedIndex);

		should(insertedItem).be.eql(message.error);
	});
});

describe('Linked List insert item', () => {
	it('Should return error. Position > last + 1', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedIndex = data.length + 2;
		const insertedItem = linkedList.insert('uhh such a new item!', insertedIndex);

		should(insertedItem).be.eql(message.error);
	});
});

describe('Linked List unshift (insert before first)', () => {
	it('Should return inserted item', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const insertedItem = linkedList.unshift('uhh such a new item!');

		should(insertedItem.beforeInserted).be.eql(undefined);
		should(insertedItem.afterInserted).be.eql(data[0]);
		should(insertedItem.length).be.eql(data.length + 1);
	});
});

describe('Linked List shift (remove first)', () => {
	it('Should return removed item', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedItem = linkedList.shift();

		should(removedItem.deleted).be.eql(data[0]);
		should(removedItem.beforeToDelete).be.eql(undefined);
		should(removedItem.next).be.eql(data[1]);
		should(removedItem.length).be.eql(data.length - 1);
	});
});

describe('Linked List pop (remove last)', () => {
	it('Should return removed item', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}
		const removedItem = linkedList.pop();

		should(removedItem.deleted).be.eql(data[data.length - 1]);
		should(removedItem.beforeToDelete).be.eql(data[data.length - 2]);
		should(removedItem.next).be.eql(undefined);
		should(removedItem.length).be.eql(data.length - 1);
	});
});


describe('Linked List set (change item)', () => {
	it('Should return changed item, position random between first and last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}

		const changedIndex = Math.floor(Math.random() * data.length);
		const changedItem = linkedList.set('wow change is real!', changedIndex);

		should(changedItem.changed).be.eql('wow change is real!');
		should(changedItem.next).be.eql(data[changedIndex + 1]);
		should(changedItem.length).be.eql(data.length);
	});
});


describe('Linked List set (change item)', () => {
	it('Should return changed item, position first', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}

		const changedIndex = 0;
		const changedItem = linkedList.set('wow change is real!', changedIndex);

		should(changedItem.changed).be.eql('wow change is real!');
		should(changedItem.next).be.eql(data[changedIndex + 1]);
		should(changedItem.length).be.eql(data.length);
	});
});

describe('Linked List set (change item)', () => {
	it('Should return changed item, position last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}

		const changedIndex = data.length - 1;
		const changedItem = linkedList.set('wow change is real!', changedIndex);

		should(changedItem.changed).be.eql('wow change is real!');
		should(changedItem.next).be.eql(data[changedIndex + 1]);
		should(changedItem.length).be.eql(data.length);
	});
});

describe('Linked List set (change item)', () => {
	it('Should return error, positon < 0', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}

		const changedIndex = -1;
		const changedItem = linkedList.set('wow change is real!', changedIndex);

		should(changedItem).be.eql(message.error);
	});
});


describe('Linked List set (change item)', () => {
	it('Should return error, positon > last', () => {
		const linkedList = new algo.LinkedList();
		for (let i = 0; i < data.length; i += 1) {
			linkedList.push(data[i]);
		}

		const changedIndex = data.length;
		const changedItem = linkedList.set('wow change is real!', changedIndex);

		should(changedItem).be.eql(message.error);
	});
});
