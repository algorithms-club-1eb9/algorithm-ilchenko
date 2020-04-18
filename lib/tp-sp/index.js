module.exports = function (graph, stack) {
  let root = null;
  const paths = {};

  function calculateWeight(start, vertex) {
    let weight = graph.getEdgeWeight(start, vertex);
    if (start !== root) {
      weight += paths[ start ][ 1 ];
    }
    return weight;
  }

  while (stack.length) {
    const start = stack.pop();
    if (root === null) root = start;
    const neighbors = graph.getNeighbors(start);
    neighbors.forEach(vertex => {
      let weight = calculateWeight(start, vertex);
      const compareNode = paths[ vertex ];
      if (!compareNode || weight < compareNode[ 1 ]) {
        paths[ vertex ] = [ start, weight ];
      }
    })
  }


  // console.log(paths)
  return paths;
};