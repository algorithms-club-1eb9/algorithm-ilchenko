const should = require('should');
const algo = require('../../index.js');

describe('Binary tree', () => {
	it('Should build the tree', () => {
		const array = [7, 15, 6, 8, 1, 2, -2];
		const tree = new algo.BinaryTree();
		array.forEach(el => {
			tree.add(el);
		});
	});
});

describe('Binary tree', () => {
	it('Should return sorted tree content', () => {
		const array = [7, 15, 6, 8, 1, 2, -2];
		const tree = new algo.BinaryTree();
		array.forEach(el => {
			tree.add(el);
		});
		const resultArray = [-2, 1, 2, 6, 7, 8, 15];
		const result = tree.getContent();
		let match = true;
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== result[i]) {
				match = false;
				break;
			}
		}
		console.log(result);
		should(match).be.eql(true);
	});
});

describe('Binary tree', () => {
	it('Should return searched node and it\'s value', () => {
		const array = [7, 15, 6, 8, 1, 2, -2];
		const tree = new algo.BinaryTree();
		array.forEach(el => {
			tree.add(el);
		});
		console.log(tree.search(6));
		should(tree.search(6).value).be.eql(6);
		should(tree.search(12)).be.eql(null);
	});
});

describe('Binary tree', () => {
	it('Should remove value and make it unable for searching', () => {
		const array = [7, 15, 6, 8, 1, 2, -2];
		const tree = new algo.BinaryTree();
		array.forEach(el => {
			tree.add(el);
		});
		should(tree.search(6).value).be.eql(6);
		tree.remove(6);
		should(tree.search(6)).be.eql(null);
		should(tree.search(1).value).be.eql(1);
	});
});
