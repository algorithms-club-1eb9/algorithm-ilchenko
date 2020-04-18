const should = require('should');
const algo = require('../../index.js');

describe('cpm', () => {
  it('Should provide CPM (find a longer path)', () => {
    const graph = new algo.Graph({
      weighted: true,
      directed: true
    });
    const CPM = algo.CPM(graph, algo.DFS, [
      [41, [1,7,9]],
      [51, [2]],
      [50, []],
      [36, []],
      [38, []],
      [45, []],
      [21, [3, 8]],
      [32, [3, 8]],
      [32, [2]],
      [29, [4, 6]],
    ]);

    should(CPM).be.eql({
      '0': [ 'S', null ],
      '1': [ '0', 41 ],
      '2': [ '8', 123 ],
      '3': [ '6', 91 ],
      '4': [ '9', 70 ],
      '5': [ 'S', null ],
      '6': [ '9', 70 ],
      '7': [ '0', 41 ],
      '8': [ '6', 91 ],
      '9': [ '0', 41 ],
      'F': [ '2', 173 ]
    })

  });
});