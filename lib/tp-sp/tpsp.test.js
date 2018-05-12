const should = require('should');
const algo = require('../../index.js');

describe('TPSP', () => {
  it.skip('Should make TPSP', () => {
    const graph = new algo.Graph(null, {
      directed: true,
      weighted: true
    });
    graph.build([[0,1], [1,2], [0,2], [4,0], [3,0], [2, 5], [3, 5]]);

    const topologicalSorted = [];
    algo.DFS(graph, 0, v => topologicalSorted.push(v));
    //
    // should(topologicalSorted).be.eql([0, 1, 2, 5, 3, 4]);
  });
});