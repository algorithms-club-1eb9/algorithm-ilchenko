const Vertex = require('./vertex');

const defaults = {
  data: null,
  directed: false,
  weighted: false
};

module.exports = class {
  constructor(options) {
    this.options = Object.assign({}, defaults, options);
    this.vertices = {};

    if (this.options.data) {
      this.build(this.options.data);
    }
  }

  addVertex(val) {
    if (!this.vertices[ val ]) {
      this.vertices[ val ] = new Vertex(val);
    }
  }

  removeVertex(val) {
    if (this.vertices[ val ]) {
      const neighbors = this.getNeighbors(val);
      neighbors.forEach(n => {
        this.removeEdge(val, n);
      })

      delete this.vertices[ val ];
    }
  }

  getVertex(vertex) {
    return this.vertices[ vertex ] || null;
  }

  addEdge(start, end, weight = 1) {
    this.addVertex(start);
    this.addVertex(end);
    if (!this.hasEdge(start, end)) {
      this.vertices[ start ].neighbors[ end ] = weight;
    }
    if (!this.options.directed && !this.hasEdge(end, start)) {
      this.vertices[ end ].neighbors[ start ] = weight;
    }

  };

  removeEdge(start, end) {
    if (this.vertices[ start ] && this.vertices[ end ]) {
      if (this.vertices[ start ].neighbors[ end ]) {
        delete this.vertices[ start ].neighbors[ end ];
      }
      if (this.vertices[ end ].neighbors[ start ]) {
        delete this.vertices[ end ].neighbors[ start ];
      }
    }
  };

  hasEdge(start, end) {
    return !!(this.vertices[ start ] && this.vertices[ start ].neighbors[ end ]);
  };

  getEdgeWeight(start, end) {
    return this.hasEdge(start, end) ? this.vertices[ start ].neighbors[ end ] : null;
  };

  getNeighbors(vertex) {
    const neighbors = [];
    if (!!this.getVertex(vertex)) {
      Object.keys(this.vertices[ vertex ].neighbors).forEach(n => {
        neighbors.push(n);
      })
    }
    return neighbors;
  }

  build(data) {
    data.forEach(edge => {
      const [ start, end, weight ] = edge;
      this.addEdge(start, end, weight);
    })
  };

  getData() {
    const adjactency = {};
    Object.keys(this.vertices).forEach(v => {
      adjactency[ v ] = this.getNeighbors(v);
    });
    return adjactency;
  }

};
