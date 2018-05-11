const should = require('should');
const algo = require('../../index.js');

describe('bfs', () => {
  it.only('should find path to each vertex', () => {
    const graph = new algo.Graph();
    graph.build([[0,1], [1,2], [0,2], [1,3], [3,4], [0,4]])

    const shortestPathIndex = algo.BFS(graph, 3, () => {});

    should(shortestPathIndex).eql({ '0': 1, '1': 3, '2': 1, '4': 3 });
  });
});