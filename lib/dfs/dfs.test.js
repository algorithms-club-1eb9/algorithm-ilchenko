const should = require('should');
const algo = require('../../index.js');

describe('DFS', () => {
  it('Should provide DFS', () => {
    const graph = new algo.Graph({directed: true});
    graph.build([[0,2], [1,2], [2, 5], [3, 5], [0,1], [0, 4], [0, 3]]);

    const topologicalSorted = [];

    algo.DFS(graph, '0', v => topologicalSorted.push(v));
    //
    should(topologicalSorted).be.eql(['5', '2', '1', '3', '4', '0']);
  });
});