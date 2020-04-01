import SinglyLinkedList from '../utilityDataStructures/singleLinkedList';

describe('SinglyLinkedList Initiates as Expected', () => {
  let newList = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
  });

  test('Check that singly linked list has a length of 0 when no nodes added', () => {
    expect(newList.traverseValues()).toStrictEqual([]);
  });

  test('Check that head is null when list created', () => {
    expect(newList.head).toBe(null);
  });

  test('Check that tail is null when list is created', () => {
    expect(newList.tail).toBe(null);
  });

  test('Check that length is 0 when list is created', () => {
    expect(newList.length).toBe(0);
  });  

});

describe('SinglyLinkedList Push Method Works As Expected', () => {
  let newList = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
  });

  test('Check that the head is the value added when only 1 node added', () => {
    newList.push(3);
    expect(newList.head.val).toBe(3);
  });

  test('Check that the head and tail are the same when only 1 node', () => {
    newList.push(3);
    expect(newList.head).toStrictEqual(newList.tail);
  });

  test('Check that the length is 1 when only 1 node', () => {
    newList.push(3);
    expect(newList.length).toBe(1);
  });

  test('Check that the head and tail are the same when only 1 node', () => {
    newList.push(4);
    expect(newList.head).toStrictEqual(newList.tail);
  });

  test('Check that head and tail are not the same when more than 1 node', () => {
    newList.push(3);
    newList.push(4);
    expect(newList.head).not.toBe(newList.tail);
  });

  test('Check that the length is correct when there is more than 1 node', () => {
    for (let i = 0; i < 10; i++) {
      newList.push(i);
    }
    expect(newList.length).toBe(10);
  });

  test('Check that the head is the first node added when there is more than 1 node', () => {
    for (let i = 0; i < 10; i++) {
      newList.push(i);
    }
    expect(newList.head.val).toBe(0);
  });

  test('Check that the tail is the last node added when there is more than 1 node', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newList.push(i);
    }
    expect(newList.tail.val).toBe(i - 1);
  });
  test('Checks that the list is returned when push is successful', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newList.push(i);
    }
    expect(newList.push(50)).toStrictEqual(newList);
  });
});

describe('SinglyLinkedList pop Method works as Expected', () => {
  let newList = null;
  let random = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    random = Math.floor(Math.random() * 100);
  });

  test('Pop returns undefined with empty list', () => {
    expect(newList.pop()).toBe(undefined);
  });

  test('Pop returns the value of the head when only 1 value', () => {
    newList.push(1);
    const head = newList.head.val;
    const popped = newList.pop();
    expect(popped.val === head).toEqual(true);
  });

  test('Pop returns the value of the tail when only 1 value', () => {
    newList.push(random);
    const tail = newList.tail.val;
    const popped = newList.pop();
    expect(popped.val === tail).toEqual(true);
  });

  test('Pop returns the correct value of the tail when many values', () => {
    for (let i = 0; i < 20; i++) {
      random = Math.floor(Math.random() * 100);
      newList.push(random);
    }
    expect(newList.pop().val).toBe(random);
  });

  test('Pop decrements the length when invoked', () => {
    for (let i = 0; i < 20; i++) {
      random = Math.floor(Math.random() * 100);
      newList.push(random);
    }
    const length = newList.length;
    newList.pop();
    expect(newList.length).toBe(length - 1);
  });
});

describe('SinglyLinkedList shift Method works as expected', () => {
  let newList = null;
  let random = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    random = Math.floor(Math.random() * 100);
  });

  test('Returns undefined with empty list', () => {
    expect(newList.shift()).toBe(undefined);
  });

  test('Return matches the previous head when only 1 node', () => {
    newList.push(random);
    const head = newList.head;
    expect(newList.shift()).toStrictEqual(head);
  });

  test('Return matches the previous tail when only 1 node', () => {
    newList.push(random);
    const tail = newList.tail;
    expect(newList.shift()).toStrictEqual(tail);
  });

  test('Decrements length when invoked', () => {
    for (let i = 0; i < 20; i++) {
      random = Math.floor(Math.random() * 100);
      newList.push(random);
    }
    const length = newList.length;
    newList.shift()
    expect(newList.length).toBe(length - 1);
  });
});

describe('SinglyLinkedList unshift Method Works as Expected', () => {
  let newList = null;
  let random = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    random = Math.floor(Math.random() * 100);
  });

  test('Check that the head is the value added when only 1 node added', () => {
    newList.unshift(3);
    expect(newList.head.val).toBe(3);
  });

  test('Check that the head and tail are the same when only 1 node', () => {
    newList.unshift(3);
    expect(newList.head).toStrictEqual(newList.tail);
  });

  test('Check that the length is 1 when only 1 node', () => {
    newList.unshift(3);
    expect(newList.length).toBe(1);
  });

  test('Check that the head and tail are the same when only 1 node', () => {
    newList.unshift(4);
    expect(newList.head).toStrictEqual(newList.tail);
  });

  test('Check that head and tail are not the same when more than 1 node', () => {
    newList.unshift(3);
    newList.unshift(4);
    expect(newList.head).not.toBe(newList.tail);
  });

  test('Check that the length is correct when there is more than 1 node', () => {
    for (let i = 0; i < 10; i++) {
      newList.unshift(i);
    }
    expect(newList.length).toBe(10);
  });

  test('Check that the head is the first node added when there is more than 1 node', () => {
    for (let i = 0; i < 10; i++) {
      newList.unshift(i);
    }
    expect(newList.tail.val).toBe(0);
  });

  test('Check that the tail is the last node added when there is more than 1 node', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newList.unshift(i);
    }
    expect(newList.head.val).toBe(i - 1);
  });
  test('Checks that the list is returned when push is successful', () => {
    let i = 0;
    for (i; i < 10; i++) {
      newList.unshift(i);
    }
    expect(newList.unshift(50)).toStrictEqual(newList);
  });
});


describe('SinglyLinkedList get Method Works as Expected', () => {
  let newList = null;
  let random = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    random = Math.floor(Math.random() * 100);
  });

  test('Returns null when there are no nodes', () => {
    expect(newList.get(3)).toBe(null);
  });

  test('Returns the correct value at the index', () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
      newList.push(i);
      arr.push(i);
    }
    const random = Math.floor(Math.random() * 10);
    expect(newList.get(random).val).toBe(arr[random]);
  });
});

describe('SinglyLinkedList set Method Works as Expected', () => {
  let newList = null;
  let random = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    random = Math.floor(Math.random() * 100);
  });

  test('Set returns false when node index is not present', () => {
    expect(newList.set(1, 10)).toBe(false);
  });

  test('Set returns true when the node index is found and replaced', () => {
    for (let i = 0; i < 10; i++) {
      newList.push(i);
    }
    expect(newList.set(4, 5)).toBe(true);
  });
});

describe('SinglyLinkedList insert Method Works as Expected', () => {
  let newList = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    for (let i = 0; i < 10; i++) {
      newList.push(i);
    }
  });

  test('Returns false if index is less than 0', () => {
    expect(newList.insert(-1, 10)).toBe(false);
  });

  test('Returns false when insert index is greater than list length', () => {
    expect(newList.insert(20, 1)).toBe(false);
  });
  
  test('Insert increases the length when inserted', () => {
    const prevLength = newList.length;
    newList.insert(5, 11);
    expect(newList.length).toBe(prevLength + 1);
  });

  test('Insert puts the new value at the correct index', () => {
    newList.insert(5, 11);
    expect(newList.get(5).val).toBe(11);
  });
});

describe('SinglyLinkedList insert Method Works as Expected', () => {
  let newList = null;
  beforeEach(() => {
    newList = new SinglyLinkedList();
    for (let i = 0; i < 10; i++) {
      newList.push(i);
    }
  });

  test('Remove returns null if index is less than 0', () => {
    expect(newList.remove(-1)).toBe(null);
  });

  test('Remove returns the removed node when input is valid', () => {
    const getRemoved = newList.get(2);
    expect(newList.remove(2)).toStrictEqual(getRemoved);
  });

  test('Decrements length when node removed', () => {
    const length = newList.length;
    newList.remove(2);
    expect(newList.length).toBe(length - 1);
  });
});

describe('SinglyLinkedList reverse Method Works as Expected', () => {
  let forwardList = null;
  let backwardList = null;
  beforeEach(() => {
    forwardList = new SinglyLinkedList();
    backwardList = new SinglyLinkedList();
    for (let i = 0; i < 10; i++) {
      forwardList.push(i);
      backwardList.unshift(i);
    }
  });

  test('forwardList when reversed equals backwardList', () => {
    expect(forwardList.reverse()).toStrictEqual(backwardList);
  });
});

describe('SinglyLinkedList traverseValues Method works as Expected', () => {

  test('traverseValues returns an empty array when no Nodes in List', () => {
    let newList = new SinglyLinkedList();
    expect(newList.traverseValues()).toStrictEqual([]);
  });

  test('traversedValues equals input values', () => {
    let newList = new SinglyLinkedList();
    let values = []
    for (let i = 0; i < 10; i++) {
      newList.push(i);
      values.push(i);
    }
    expect(newList.traverseValues()).toStrictEqual(values);
  });
});
