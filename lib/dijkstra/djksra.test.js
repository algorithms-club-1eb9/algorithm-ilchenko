const should = require('should');
const algo = require('../../index.js');

describe('Dijkstra path finding', () => {
  it('Should find shortest path', () => {
    const graph = new algo.Graph({
      directed: true,
      weighted: true
    });
    graph.build([ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 0, 2, 4 ], [ 0, 4, 3 ], [ 0, 3, 2 ], [ 2, 5, 11 ], [ 3, 5, 5 ] ]);
    // const topologicalSorted = [];
    // algo.DFS(graph, '0', v => topologicalSorted.push(v[ 0 ]));
    const shortestPaths = algo.Dijkstra(graph, '0');
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
