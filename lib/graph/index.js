const Vertex = require('./vertex');

module.exports = class {
  constructor(data) { // [[0, 1], [0, 2], [1, 3]] -> array with edges
    this.vertices = {};
    this.adjactency = {};
    if (data) {
      this.build(data);
    }
  }

  addVertex(val) {
    if (!this.vertices[ val ]) {
      this.vertices[ val ] = new Vertex(val);
    }
  }

  removeVertex(val) {
    if (this.vertices[ val ]) {
      delete this.vertices[ val ];

      Object.keys(this.vertices).forEach(vertex => {
        if (this.vertices[ vertex ].neighbors[ val ]) {
          delete this.vertices[ vertex ].neighbors[ val ];
        }
      });
    }
  }

  getVertex(val) {
    return this.vertices[ val ];
  }

  addEdge(start, end, weight = 1) {
    this.addVertex(start);
    this.addVertex(end);
    if (!this.hasEdge(start, end)) {
      this.adjactency[ start ] =
        this.adjactency[ start ] ? this.adjactency[ start ].concat(end) : [ end ];
      this.vertices[ start ].neighbors[ end ] = weight;
    }
    if (!this.hasEdge(end, start)) {
      this.adjactency[ end ] =
        this.adjactency[ end ] ? this.adjactency[ end ].concat(start) : [ start ];
      this.vertices[ end ].neighbors[ start ] = weight;
    }

  };

  removeEdge(start, end) {
    if (this.vertices[ start ] && this.vertices[ end ]
      && this.vertices[ start ].neighbors[ end ]
      && this.vertices[ end ].neighbors[ start ]) {
      delete this.vertices[ start ].neighbors[ end ];
      delete this.vertices[ end ].neighbors[ start ];

      this.adjactency[ start ].splice(this.adjactency[ start ].indexOf(end), 1);
      this.adjactency[ end ].splice(this.adjactency[ end ].indexOf(start), 1);
    }
  };

  hasEdge(start, end) {
    return this.adjactency[ start ] && !!~this.adjactency[ start ].indexOf(end) || false;
  };

  getEdgeWeight(start, end) {
    return this.vertices[ start ] && this.vertices[ start ].neighbors[ end ] || null;
  };

  getNeighbors(vertex) {
    return this.adjactency[ vertex ];
  }

  build(data) {
    data.forEach(edge => {
      if (edge.length === 2) {
        this.addEdge(edge[ 0 ], edge[ 1 ]);
      } else {
        return false;
      }
    })
  };

  getData() {
    return this.adjactency;
  }

};
