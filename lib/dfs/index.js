const visited = [];

function dfs (graph, start, action) {
  if (!graph.getVertex(start)) return null;
  if (visited.includes(start)) return;

  visited.push(start);
  const neighbors = graph.getNeighbors(start);
  console.log('start', start, 'nbrs', neighbors)

  action(start, neighbors, graph);
  neighbors.forEach(vertex => dfs(graph, vertex, action))

}

module.exports = dfs;