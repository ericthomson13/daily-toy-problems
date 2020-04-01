// this is an undirected graph with an adjacency list

class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    } else {
      return false;
    }
  }

  addEdge (vertex1, vertex2) {
    if (this.adjacencyList[vertex1].indexOf(vertex2) > -1){
      vertex1.push(this.adjacencyList[vertex2]);
      vertex2.push(this.adjacencyList[vertex1]);
      return true;
    } else {
      return 'edge already exists';
    }
  }

  removeEdge (vertex1, vertex2) {
    if (this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
      return true;
    } else {
      return 'edge does not exist';
    }
  }

  removeVertex (vertex) {
    if (this.adjacencyList[vertex]) {
      while(this.adjacencyList[vertex].length) {
        const adjacenctVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacenctVertex);
      }
      delete this.adjacencyList[vertex];
      return true;
    } else {
      return 'vertex does not exist';
    }
  }

  DFSRecursive (start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    (function DFS (vertex) {        
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) { 
          return DFS(neighbor);
        }
      }); 
    })(start);
    return result;
  }

  // with graph need to specify start because no root node
  DFSIterative (start) {
    const visited = {};
    const result = [];
    let currentVert;
    visited[start] = true;
    while(stack.length) {
      currentVert = stack.pop();
      result.push(currentVert);
      this.adjacencyList[currentVert].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  // with graph need to specify start because no root node
    // have to write code to pay attention to how many times revisited each node
  BF (start) {
    const visited = {};
    const result = [];
    const queue = [start];
    let currentVert;
    while (queue.length) {
      currentVert = queue.shift();
      result.push(currentVert);
      this.adjacencyList[currentVert].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
};

export default Graph;
