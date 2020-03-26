// this is an undirected graph with an adjacency list

class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    // this will overwrite if that vertex already exists
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
    // need to loop for each vertex to remove the edges
    // need to remove the key from adjacencyList
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

  // with graph need to specify start because no root node
  DFSRecursive (start) {
    // follows 1 neighbor at a time before following the rest of the neighbors
    // have to put some order to decide what order neighbors are visited in 
    // have to write code to pay attention to how many 
      //times revisited each node so don't infinite loop
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
    // follows 1 neighbor at a time before following the rest of the neighbors
    // have to put some order to decide what order neighbors are visited in 
    // have to write code to pay attention to how many 
      //times revisited each node so don't infinite loop
    // create a stack
      // add start to stack
    const stack = [start];
    const visited = {};
    const result = [];
    // avoids constantly initializing this inside while loop
    let currentVert;
    // add start to visited
    visited[start] = true;
    // loop over stack
    while(stack.length) {
      // pull off stack
      currentVert = stack.pop();
      // add what pulled off stack to result
      result.push(currentVert);
      // iterates through each edge of current 
      this.adjacencyList[currentVert].forEach(neighbor => {
        // checks if visisted
        if (!visited[neighbor]){
          // adds to visited and adds to stack 
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
      // add what pulled off stack to result
      result.push(currentVert);
      // iterates through each edge of current 
      this.adjacencyList[currentVert].forEach(neighbor => {
        // checks if visisted
        if (!visited[neighbor]){
          // adds to visited and adds to stack 
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
};

export default Graph;
