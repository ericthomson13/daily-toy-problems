import DoublyLinkedList from '../utilityDataStructures/doublyLinkedList';

// TODO: figure out how to mock Node class to see that it is called when new Nodes are created
// TODO: figure out how to mock methods within the class

describe('DoublyLinkedList Testing Suite', () => {
  let newList = null;
  beforeEach(() => {
    newList = new DoublyLinkedList();
  });

  test('List initializes with head and tail of null and length of 0', () => {
    const thisList = [newList.head, newList.tail, newList.length];
    const expected = [null, null, 0];
    expect(thisList).toStrictEqual(expected);
  });

  test('Push Increases the Length of the List', () => {
    newList.push(1);
    expect(newList.length).toBe(1);
  });

  test('Head and Tail are the Same When Push Called Once', () => {
    const random = Math.floor(Math.random() * 100);
    newList.push(random);
    expect(newList.head).toBe(newList.tail);
  });

  test('Push Increases the Length to the Expected Length', () => {
    const randomNum = Math.floor(Math.random() * 100);
    for (let i = 0; i < randomNum; i++)  {
      newList.push(i);
    }
    expect(newList.length).toBe(randomNum);
  });

  // fix Class so that it isn't returning circular objects
  xtest('Head is the First Value Input when Called Multiple Times', () => {
    for (let i = 0; i < 100; i++) {
      newList.push(i);
    }
    console.log(newList.tail);
    expect(newList.head.val).toBe(0);
  });

  // fix Class so that isn't returning curcular objects
  xtest('Tail is the Last Value Input When Called Multiple times', () => {
    let i = 0;
    for (i; i < 100; i++) {
      newList.push(i);
    }
    expect(newList.tail).toBe(i - 1);
  });

  
});