module.exports = function (graph, DFS, array) {
  let root = null;
  const paths = {};
  const topologicalSorted = [];

  function calculateWeight(start, vertex) {
    let weight = graph.getEdgeWeight(start, vertex);
    if (start !== root) {
      weight += paths[ start ][ 1 ];
    }
    return weight;
  }

  graph.addVertex('S');
  graph.addVertex('F');
  let toRemove = [];
  array.forEach((el, i) => {
    const [ weight, neighbors ] = el;
    graph.addEdge('S', i, 0);
    if (neighbors.length) {
      neighbors.forEach(n => {
        graph.addEdge(i, n, weight);
        if (!toRemove.includes(n)) toRemove.push(n);
      })
    } else {
      graph.addEdge(i, 'F', weight);
    }
  });
  toRemove.forEach(el => {
    graph.removeEdge('S', el);
  });

  DFS(graph, 'S', v => topologicalSorted.push(v[ 0 ]));
  while (topologicalSorted.length) {
    const start = topologicalSorted.pop();
    if (root === null) root = start;
    const neighbors = graph.getNeighbors(start);
    neighbors.forEach(vertex => {
      let weight = calculateWeight(start, vertex);
      const compareNode = paths[ vertex ];
      if (!compareNode || weight > compareNode[ 1 ]) {
        paths[ vertex ] = [ start, weight ];
      }
    })
  }

  console.log(paths)
  return paths;
};