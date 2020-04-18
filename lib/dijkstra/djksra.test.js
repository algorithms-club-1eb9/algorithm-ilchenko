const should = require('should');
const algo = require('../../index.js');

describe('Dijkstra path finding', () => {
  it('Should find shortest path', () => {
    const graph = new algo.Graph({
      directed: true,
      weighted: true
    });
    graph.build([ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 0, 2, 4 ], [ 0, 4, 3 ], [ 0, 3, 2 ], [ 2, 5, 11 ], [ 3, 5, 5 ] ]);
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

describe('Dijkstra path finding', () => {
  it('Should find shortest path in big graph', () => {
    const graph = new algo.Graph({
      directed: true,
      weighted: true
    });
    graph.build([
      [0, 1, 1],
      [0, 3, 4],
      [1, 2, 4],
      [1, 4, 8],
      [2, 5, 1],
      [2, 4, 9],
      [3, 6, 4],
      [3, 7, 7],
      [4, 3, 3],
      [4, 7, 5],
      [4, 8, 1],
      [5, 8, 3],
      [6, 7, 6],
      [7, 8, 0]
    ]);
    const shortestPaths = algo.Dijkstra(graph, '0');
    //
    should(shortestPaths).be.eql({
      '1': ['0', 1],
      '2': ['1', 5],
      '3': ['0', 4],
      '4': ['1', 9],
      '5': ['2', 6],
      '6': ['3', 8],
      '7': ['3', 11],
      '8': ['5', 9],
    });
  });
});
