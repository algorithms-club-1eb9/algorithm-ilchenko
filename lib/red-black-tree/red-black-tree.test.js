const should = require('should');
const algo = require('../../index.js');

function matchArrays(arr1, arr2) {
  let match = true;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[ i ] !== arr2[ i ]) {
      match = false;
      return match;
    }
  }
  return match;
}

describe('Red Black tree', () => {
  it('Should insert item to tree and return content', () => {
    const tree = new algo.RBTree();
    tree.root = tree.insertNode(tree.root, 10);
    tree.root.isRed = false;
    const resultArray = [ 10 ];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});

describe('Red Black tree', () => {
  it('Should provide left rotate', () => {
    const tree = new algo.RBTree();
    const array = [ 10, 20];
    array.forEach(el => {
      tree.root = tree.insertNode(tree.root, el);
      tree.root.isRed = false;
    })
    console.log(tree.getContent(tree.root))
    const resultArray = [ 10, 20 ];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});


describe('Red Black tree', () => {
  it('Should provide right rotate', () => {
    const tree = new algo.RBTree();
    const array = [ 10, 20, 5];
    array.forEach(el => {
      tree.root = tree.insertNode(tree.root, el);
      tree.root.isRed = false;
    })
    console.log(tree.getContent(tree.root))
    const resultArray = [ 5, 10, 20 ];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});


describe('Red Black tree', () => {
  it('Should provide colors swap', () => {
    const tree = new algo.RBTree();
    const array = [ 10, 20, 30];
    array.forEach(el => {
      tree.root = tree.insertNode(tree.root, el);
      tree.root.isRed = false;
    })
    console.log(tree.getContent(tree.root))
    const resultArray = [10, 20, 30 ];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});


describe('Red Black tree', () => {
  it('Should build a tree', () => {
    const tree = new algo.RBTree();
    const array = [ 5, -5, 0, 11, 20, 183, 2, 0, 18, 3, 15, 30];
    array.forEach(el => {
      tree.root = tree.insertNode(tree.root, el);
      tree.root.isRed = false;
    })
    console.log(tree.getContent(tree.root))
    const resultArray = [-5, 0, 2, 3, 5, 11, 15, 18, 20, 30, 183];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});

describe('Red Black tree', () => {
  it('Should build a tree, strings', () => {
    const tree = new algo.RBTree();
    const array = [ 'Asdf', 'cqe', 'Ddf', 'asdf', 'bd', 'fdc', 'ddf'];
    array.forEach(el => {
      tree.root = tree.insertNode(tree.root, el);
      tree.root.isRed = false;
    })
    console.log(tree.getContent(tree.root))
    const resultArray = ['Asdf', 'Ddf', 'asdf', 'bd', 'cqe', 'ddf', 'fdc'];
    should(matchArrays(resultArray, tree.getContent(tree.root))).be.eql(true);
  });
});