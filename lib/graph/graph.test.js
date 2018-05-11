const should = require('should');
const algo = require('../../index.js');

describe('Graph', () => {
  it('Should add vertex to graph', () => {
    const graph = new algo.Graph();
    graph.addVertex(2);
    should(graph.getVertex(2).val).be.eql(2);
  });
});

describe('Graph', () => {
  it('Should add edge to graph', () => {
    const graph = new algo.Graph();
    graph.addEdge(2, 5);
    should(graph.hasEdge(2, 5)).be.eql(true);
    should(graph.hasEdge(5, 2)).be.eql(true);
  });
});

describe('Graph', () => {
  it('Should add weighted edge to graph', () => {
    const graph = new algo.Graph();
    graph.addEdge(2, 5, 15);
    should(graph.getVertex(2).val).be.eql(2);
    should(graph.getVertex(5).val).be.eql(5)
    should(graph.hasEdge(2, 5)).be.eql(true);
    should(graph.getEdgeWeight(2, 5)).be.eql(15);
  });
});

describe('Graph', () => {
  it('Should remove vertex and its edges from graph', () => {
    const graph = new algo.Graph();
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(5);
    graph.addEdge(3, 5);
    should(graph.getVertex(2).val).be.eql(2);
    should(graph.getVertex(3).val).be.eql(3);
    should(graph.getVertex(5).val).be.eql(5);
    should(graph.hasEdge(3, 5)).be.eql(true);
    graph.removeVertex(3);
    should(graph.getVertex(3)).be.eql(null);
    should(graph.hasEdge(3, 5)).be.eql(false);
    console.log(graph.getData())
  });
});

describe('Graph', () => {
  it('Should remove only edge from graph and keep vertex alive', () => {
    const graph = new algo.Graph();
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(5);
    graph.addEdge(3, 5);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    should(graph.hasEdge(3, 5)).be.eql(true);
    should(graph.hasEdge(2, 3)).be.eql(true);
    should(graph.hasEdge(2, 5)).be.eql(true);
    graph.removeEdge(3, 2);
    should(graph.hasEdge(3, 5)).be.eql(true);
    should(graph.hasEdge(2, 3)).be.eql(false);
    should(graph.hasEdge(2, 5)).be.eql(true);
    should(graph.getVertex(2).val).be.eql(2);
    should(graph.getVertex(3).val).be.eql(3);
    should(graph.getVertex(5).val).be.eql(5);
    console.log(graph.getData())
  });
});



describe('Graph', () => {
  it('Should return false and null weight if edge does not exists', () => {
    const graph = new algo.Graph();
    graph.addVertex(2);
    graph.addVertex(5);
    should(graph.hasEdge(2, 5)).be.eql(false);
    should(graph.getEdgeWeight(2, 5)).be.eql(null);
  });
});

describe('Graph', () => {
  it('Should return neighbors of given vertex', () => {
    const graph = new algo.Graph();
    graph.addEdge(2, 5);
    graph.addEdge(2, 1);
    graph.addEdge(1, 3);
    graph.addEdge(3, 4);
    should(graph.getNeighbors(2)).be.containEql(5, 1);
    should(graph.getNeighbors(2)).have.length(2);
  });
});

describe('Graph', () => {
  it('Should return graph adjactency', () => {
    const graph = new algo.Graph();
    graph.addEdge(2, 5);
    graph.addEdge(2, 1);
    graph.addEdge(1, 3);
    graph.addEdge(3, 4);
    graph.addEdge(3, 15);
    const data = graph.getData();
    console.log(data)
    should(data[1]).be.containEql(2, 3);
    should(data[1]).have.length(2);
    should(data[2]).be.containEql(5, 1);
    should(data[2]).have.length(2);
    should(data[3]).be.containEql(1, 4, 15);
    should(data[3]).have.length(3);
    should(data[4]).be.containEql(3);
    should(data[4]).have.length(1);
    should(data[5]).be.containEql(2);
    should(data[5]).have.length(1);
    should(data[15]).be.containEql(3);
    should(data[15]).have.length(1);
  });
});

describe('Graph', () => {
  it('Should build graph from existing data', () => {
    const graph = new algo.Graph([[2, 5], [1, 3], [2, 15], [1, 4], [4, 2]]);
    const data = graph.getData();
    console.log(data);
    should(data[1]).be.containEql(3, 4);
    should(data[1]).have.length(2);
    should(data[2]).be.containEql(5, 15, 5);
    should(data[2]).have.length(3);
    should(data[3]).be.containEql(1);
    should(data[3]).have.length(1);
    should(data[4]).be.containEql(1, 2);
    should(data[4]).have.length(2);
    should(data[5]).be.containEql(2);
    should(data[5]).have.length(1);
    should(data[15]).be.containEql(2);
    should(data[15]).have.length(1);
  });
})