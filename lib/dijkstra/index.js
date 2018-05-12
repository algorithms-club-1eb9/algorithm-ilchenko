const BinaryHeap = require('../binary-heap');

module.exports = function (graph, start) {
  const root = start;
  const paths = {};
  const heap = new BinaryHeap({
    less(a, b) {
      return b[ 2 ] < a[ 2 ];
    },
    equal(a, b) {
      return a[ 0 ] === b[ 0 ];
    }
  });

  function updateHeap(vertex, callback) {
    const i = heap.content.findIndex(el => el[ 0 ] === vertex);
    if (~i) {
      callback(i);
      heap.bubble(i);
      heap.sink(i);
    }

  }

  function updateWeight(start, weight) {
    if (start !== root) {
      weight += paths[ start ][ 1 ];
    }
    return weight;
  }

  Object.keys(graph.vertices).forEach(vertex => {
    heap.add([ vertex, start, Infinity ])
  });
  updateHeap(start, i => {
    heap.content[ i ][ 1 ] = null;
    heap.content[ i ][ 2 ] = 0;
  });

  while (heap.content.length) {
    const node = heap.get();
    let from = node[ 0 ];
    graph.getNeighbors(from).forEach(vertex => {

      let weight = updateWeight(from, graph.getEdgeWeight(from, vertex))

      updateHeap(vertex, i => {
        if (weight < heap.content[ i ][ 2 ]) {
          heap.content[ i ][ 1 ] = from;
          heap.content[ i ][ 2 ] = weight;
          paths[ vertex ] = [ from, weight ]
        }
      })
    });
  }
  console.log(paths)
  return paths;
};