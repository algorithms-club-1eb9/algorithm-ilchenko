const BinaryHeap = require('../binary-heap');

module.exports = function (graph, stack) {
  let root = null;
  const paths = {};
  const heap = new BinaryHeap({
    less(a, b) {
      return b[ 1 ] < a[ 1 ];
    },
    equal(a, b) {
      return a[0] === b[0];
    }
  });

  function calculateWeight(start, vertex) {
    let weight = graph.getEdgeWeight(start, vertex);
    if (start !== root) {
      weight += paths[start][1];
    }
    return weight;
  }

  function addNode(start, vertex, weight) {
    heap.add([ vertex, weight ]);
    paths[ vertex ] = [ start, weight ];
  }


  while (stack.length) {

    const start = stack.pop();

    if (root === null) root = start;

    const neighbors = graph.getNeighbors(start);

    neighbors.forEach(vertex => {
      let weight = calculateWeight(start, vertex);

      const compareNode = heap.content.find(el => el[ 0 ] === vertex);

      if (!compareNode) {
        addNode(start, vertex, weight)
      } else if (compareNode && weight < compareNode[ 1 ]) {
        heap.remove(compareNode);
        addNode(start, vertex, weight)
      }
    })
  }


  console.log(paths)
  return paths;
};