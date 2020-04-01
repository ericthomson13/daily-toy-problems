import Stack from '../utilityDataStructures/stack';

describe('Stack Testing Suite', () => {
  let newStack = null;
  beforeEach(() => {
    newStack = new Stack();
  });

  test('Stack first and last are both null when stack initialized', () => {
    const firstLast = newStack.first === null && newStack.first === newStack.last;
    expect(firstLast).toBe(true);
  });

  test('Stack is initialized with a size of 0', () => {
    expect(newStack.size).toBe(0);
  });

  test('Stack has a size equal to the number of nodes pushed', () => {
    const random = Math.floor(Math.random() * 100);
    for (let i = random; i >= 0; i--) {
      newStack.push(i);
    }
    expect(newStack.size).toBe(random);
  });

  test('Stack returns the value of the last item pushed when pop invoked', () => {
    const random = Math.floor(Math.random() * 100);
    let i = random;
    for (i; i >= 0; i--) {
      newStack.push(i);
    }
    let popped = null;
    for (let j = 0; j < 5; j++) {
      popped = newStack.pop();
    }
    expect(popped).toBe(i + 5);
  });

  test('First returns the first value pushed', () => {
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i <= random; i++) {
      newStack.push(i);
    }
    expect(newStack.first.val).toBe(0);
  });

  test('Last is the last value pushed', () => {
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i <= random; i++) {
      newStack.push(i);
    }
    expect(newStack.last.val).toBe(random);
  });
});
