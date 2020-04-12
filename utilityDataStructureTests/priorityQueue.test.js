import PriorityQueue, { Node, } from '../utilityDataStructures/priorityQueue';

describe('Priority Queue Tests', () => {
  let queue = null;

  beforeEach(() => {
    queue = new PriorityQueue();
  });

  test('Heap is initiated with an array with null as the only value', () => {
    expect(queue.first).toBe(null);
  });

  test('Insert adds an instance of Node', () => {
    queue.insert(1, 1);
    expect(queue.first instanceof Node).toBe(true);
  });

  test('Insert adds the values at the expected location', () => {
    queue.insert(1, 1);
    queue.insert(2, 5);
    expect(queue.first.val === 2 && queue.first.next.val === 1).toBe(true);
  });

  test('Remove returns the expected Node', () => {
    queue.insert(1, 1);
    queue.insert(2, 5);
    const node = new Node(2, 5);
    expect(queue.remove()).toStrictEqual(node);
  });
});