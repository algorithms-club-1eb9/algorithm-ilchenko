const should = require('should');
const algo = require('../../index.js');

describe('DFS', () => {
  it('should find path to each vertex', () => {
    const graph = new algo.Graph();
    graph.build([[0,1], [1,2], [0,2], [1,3], [3,4], [0,4]])

    const allPosiblePaths = algo.DFS(graph, 3, () => {});

    should(allPosiblePaths[0]).be.containEql(4, 2, 1);
    should(allPosiblePaths[0]).have.length(3);
    should(allPosiblePaths[1]).be.containEql(3, 0, 2);
    should(allPosiblePaths[1]).have.length(3);
    should(allPosiblePaths[2]).be.containEql(1, 0);
    should(allPosiblePaths[2]).have.length(2);
    should(allPosiblePaths[3]).be.containEql(1, 4);
    should(allPosiblePaths[3]).have.length(2);
    should(allPosiblePaths[4]).be.containEql(0, 3);
    should(allPosiblePaths[4]).have.length(2);
  });
});