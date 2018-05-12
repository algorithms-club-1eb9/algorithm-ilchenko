module.exports = function dfs (graph, start, action) {
  // console.log(start, visited, visited.includes(start))
  if (!graph.getVertex(start)) return null;
  const visited = [];

  (function visit(graph, vertex, action) {
    if (visited.includes(vertex)) return;
    visited.push(vertex);
    const neighbors = graph.getNeighbors(vertex);

    neighbors.forEach(vertex => visit(graph, vertex, action))
    action(vertex, neighbors, graph);
  })(graph, start, action);

};