module.exports = (graph, start, action) => {
  if (!graph.getVertex(start)) return null;
  let  stack = [ start ],
    visited = [start],
    map = {};

  while ( stack.length ) {
    const currentIndex = stack.pop();
    const neighbors = graph.getNeighbors(currentIndex);

    neighbors.forEach( vertex => {
      if ( !visited.includes(vertex) ) stack.push( vertex );
      visited.push(vertex);
      if (!map[ vertex ]) {
        map[vertex] = [];
        map[vertex].push(currentIndex)
      } else {
        map[ vertex ].push(currentIndex);
      }

    } );
  }

  return map;

};