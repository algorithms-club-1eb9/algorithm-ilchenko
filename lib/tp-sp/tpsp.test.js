const should = require('should');
const algo = require('../../index.js');

describe('TPSP', () => {
  it('Should make TPSP', () => {
    const graph = new algo.Graph({
      directed: true,
      weighted: true
    });
    graph.build([ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 0, 2, 4 ], [ 0, 4, 3 ], [ 0, 3, 2 ], [ 2, 5, 11 ], [ 3, 5, 5 ] ]);
    const topologicalSorted = [];
    algo.DFS(graph, '0', v => topologicalSorted.push(v[ 0 ]));
    const shortestPaths = algo.TPSP(graph, topologicalSorted);
    //
    should(shortestPaths).be.eql({
      '1': ['0', 2],
      '2': ['0', 4],
      '3': ['0', 2],
      '4': ['0', 3],
      '5': ['3', 7],
    });
  });
});


describe('TPSP', () => {
  it('Should make TPSP with big graph', () => {
    const graph = new algo.Graph({
      directed: true,
      weighted: true
    });
    graph.build([
      [0, 1, 1],
      [0, 3, 4],
      [1, 2, 3],
      [1, 4, 8],
      [2, 5, -7],
      [2, 4, 11],
      [3, 6, 4],
      [3, 7, 7],
      [4, 3, 10],
      [4, 7, 5],
      [4, 8, 2],
      [5, 8, 12],
      [6, 7, 6],
      [7, 8, -3]
    ]);
    const topologicalSorted = [];
    algo.DFS(graph, '0', v => topologicalSorted.push(v[ 0 ]));
    const shortestPaths = algo.TPSP(graph, topologicalSorted);
    //
    should(shortestPaths).be.eql({
      '1': ['0', 1],
      '2': ['1', 4],
      '3': ['0', 4],
      '4': ['1', 9],
      '5': ['2', -3],
      '6': ['3', 8],
      '7': ['3', 11],
      '8': ['7', 8],
    });
  });
});