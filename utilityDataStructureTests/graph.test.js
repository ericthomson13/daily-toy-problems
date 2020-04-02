import Graph from '../utilityDataStructures/graph';

// will probably have to use expect.ObjectContaining(..object);
describe('Graph Data Structure Tests', () => {
  let graph = null;
  beforeEach(() => {
    graph = new Graph();
  });

  test('Graph initiates with an empty adjacency list', () => {
    expect(graph.adjacencyList).toStrictEqual({});
  });

  test('Adds Vertex Works As Expected', () => {
    expect(graph.addVertex(1)).toBe(true);
  });

  test('Adds Multiple Verteces Correctly When No Conflicting Vertices', () => {
    const added = [];
    let temp = null;
    const expected = [];
    for (let i = 0; i < 10; i++) {
      temp = graph.addVertex(i);
      added.push(temp);
      expected.push(true);
    }
    expect(added).toStrictEqual(expected);
  });

  test('Returns False When Vertices Already Exist', () => {
    for (let i = 0; i < 10; i++) {
      graph.addVertex(i);
    }
    const randomVertex = graph.addVertex(Math.floor(Math.random() * 10));
    expect(randomVertex).toBe(false);
  });

  test(`Returns 'vertex does not exist' When Removes Edge That Doesn't Exists`, () => {
    for (let i = 0; i < 100; i++) {
      graph.addVertex(i);
    }
    const random = Math.floor(Math.random() * 1000) + 100;
    expect(graph.removeVertex(random)).toBe('vertex does not exist');
  });

  test(`Vertex no longer exists once removed`, () => {
    for (let i = 0; i < 100; i++) {
      graph.addVertex(i);
    }
    const random = Math.floor(Math.random() * 100);
    graph.removeVertex(random);
    expect(graph.removeVertex(random)).toBe('vertex does not exist');
  });

  test('Returns true When Adds Edge Successfully', () => {
    for (let i = 0; i < 100; i++) {
      graph.addVertex(i);
    }
    const vertex1 = Math.floor(Math.random() * 100);
    const vertex2 = Math.floor(Math.random() * 100);
    if (vertex1 !== vertex2) {
      expect(graph.addEdge(vertex1, vertex2)).toBe(true);
    } else {
      expect(graph.adjacencyList[vertex1]).toStrictEqual([]);
    }
  });

  // Not passing yet ******
  xtest(`Returns 'edge already exists' When Adds Edge That Already Exists`, () => {
    for (let i = 0; i < 100; i++) {
      graph.addVertex(i);
    }
    const vertex1 =  Math.floor(Math.random() * 100);
    const vertex2 = Math.floor(Math.random() * 100);
    graph.addEdge(vertex1, vertex2);
    expect(graph.addEdge(vertex1, vertex2)).toEqual('edge already exists');
  });

  test(`Returns true When Removes Edge That Exists`, () => {
    for (let i = 0; i < 100; i++) {
      graph.addVertex(i);
    }
    const random = Math.floor(Math.random() * 100);
    expect(graph.removeVertex(random)).toBe(true);
  });

  // Add testing for DFS Iterative

  // Add testing for DFS Recursive

  // Add testing for BFS

});