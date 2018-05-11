module.exports = function (graph, start, action) {
  if (!graph.getVertex(start)) return null;
  let q = [ start ],
    visited = [],
    from = {};

  while (q.length) {
    const currentIndex = q.shift();
    const neighbors = graph.getNeighbors(currentIndex);
    visited.push(currentIndex);

    neighbors
      .filter(vertex => !visited.includes(vertex) && !q.includes(vertex))
      .forEach(vertex => {
        q.push(vertex);
        from[ vertex ] = currentIndex;
      });

    if (action) {
      action(currentIndex);
    }
  }

  return from;
}
