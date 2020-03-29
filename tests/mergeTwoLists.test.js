import SinglyLinkedList from '../utilityDataStructures/singleLinkedList';
import mergeTwoLists from '../problems/mergeTwoLists';


describe('mergeTwoLists Tests', () => {

  test('it returns a list with the correct values when given lists with a length of 1', () => {
    const l1 = new SinglyLinkedList;
    l1.push(1);
    const l2 = new SinglyLinkedList;
    l2.push(2);

    const solution = new SinglyLinkedList();
    solution.push(1);
    solution.push(2);

    expect(mergeTwoLists(l1,l2)).toStrictEqual(solution);
  });

  test('it returns a list with the correct values in order when given lists with longer lengths', () => {
    const l1 = new SinglyLinkedList;
    l1.push(1);
    l1.push(3);
    l1.push(5);
    l1.push(7);

    const l2 = new SinglyLinkedList;
    l2.push(2);
    l2.push(3);
    l2.push(4);
    l2.push(5);

    const solution = new SinglyLinkedList();
    solution.push(1);
    solution.push(2);
    solution.push(3);
    solution.push(3);
    solution.push(4);
    solution.push(5);
    solution.push(5);
    solution.push(7);

    expect(mergeTwoLists(l1,l2)).toStrictEqual(solution);
  });

  test(`it doesn't return the values in correct order when lists aren't sorted`, () => {
    const l1 = new SinglyLinkedList;
    l1.push(9);
    l1.push(3);
    l1.push(5);
    l1.push(7);

    const l2 = new SinglyLinkedList;
    l2.push(2);
    l2.push(6);
    l2.push(4);
    l2.push(5);

    const solution = new SinglyLinkedList();
    solution.push(2);
    solution.push(3);
    solution.push(4);
    solution.push(5);
    solution.push(5);
    solution.push(6);
    solution.push(7);
    solution.push(9);

    expect(mergeTwoLists(l1, l2)).not.toStrictEqual(solution);
  });

});