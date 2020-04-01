import Queue from '../utilityDataStructures/queue';

describe('Queue Testing Suite', () => {
  let newQueue = null;
  beforeEach(() => {
    newQueue = new Queue();
  })
  test('Queue initiates with a first of null', () => {
    expect(newQueue.first).toBe(null);
  });

  test('Queue initiates with a last of null', () => {
    expect(newQueue.last).toBe(null);
  });

  test('Queue initiates with a size of 0', () => {
    expect(newQueue.size).toBe(0);
  });

  test('Queue first and last are the same when only 1 item in queue', () => {
    newQueue.enqueue(1);
    const firstLast = newQueue.last === newQueue.first;
    expect(firstLast).toBe(true);
  });

  test('Queue returns the correct size based on the number of items enqueued', () => {
    let enqueued = Math.floor(Math.random() * 100);
    for (let i = 0; i < enqueued - 1; i++) {
      newQueue.enqueue(i);
    }
    expect(newQueue.size).toBe(enqueued);
  });

  test('Dequeue returns the first value in the queue', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newQueue.enqueue(i);
    }
    expect(newQueue.dequeue()).toBe(0);
  });

  test('Dequeue has the size of items enqueued and dequeued a random number', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newQueue.enqueue(i);
    }
    const random = Math.floor(Math.random() * 10);
    for (let j = 0; j < random; j++) {
      newQueue.dequeue();
    }
    expect(newQueue.size).toBe(11-random);
  });

  test('Dequeue repeatedly returns the correct items being dequeued', () => {
    let i = 0;
    const random = Math.floor(Math.random() * 100);
    const enququeList = [];
    for (i; i < random; i++) {
      newQueue.enqueue(i);
      enququeList.push(i);
    }
    const deququeList = [];
    for (i; i > 0; i--) {
      deququeList.push(newQueue.dequeue());
    }
    expect(enququeList).toStrictEqual(deququeList);
  });
});