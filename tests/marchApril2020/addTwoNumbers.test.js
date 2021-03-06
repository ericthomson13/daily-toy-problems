import SinglyLinkedList from '../../utilityDataStructures/singleLinkedList';
import addTwoNumbers from '../../problems/marchApril2020/addTwoNumbers';

describe('Testing for addTwoNumbers', () => {

  test('Returns 0 when no inputs', () => {
    expect(addTwoNumbers(null, null)).toBe(0);
  });

  test('Returns invalid inputs when first arg is not an object', () => {
    const l2 = new SinglyLinkedList();
    l2.push(1);
    l2.push(2);

    expect(addTwoNumbers('l1', l2)).toBe('please enter valid inputs');
  });

  test('Returns invalid inputs when second arg is not valid', () => {
    const l1 = new SinglyLinkedList();
    l1.push(1);
    l1.push(2);

    expect(addTwoNumbers(l1, 'l2')).toBe('please enter valid inputs');
  });

  test('Returns invalid inpus when an arg is an array', () => {
    const l2 = new SinglyLinkedList();
    l2.push(1);
    l2.push(2);

    expect(addTwoNumbers([], l2)).toBe('please enter valid inputs');
  });

  test('Returns invalid when an input is a boolean', () => {
    const l2 = new SinglyLinkedList();
    l2.push(1);
    l2.push(2);

    expect(addTwoNumbers(true, l2)).toBe('please enter valid inputs');
  });

  test('Returns 0 when inputs are both empty objects', () => {
    expect(addTwoNumbers({}, {})).toBe(0);
  });

  test('Returns l1 when l2 is null', () => {
    const l1 = new SinglyLinkedList();
    l1.push(1);
    l1.push(2);

    const solution = l1;
    expect(addTwoNumbers(l1, null)).toStrictEqual(solution);
  });

  test('Returns l2 when l1 is null', () => {
    const l2 = new SinglyLinkedList();
    l2.push(1);
    l2.push(2);

    const solution = l2;

    expect(addTwoNumbers(null, l2)).toStrictEqual(solution);
  });

  test('Returns correct sum when both are valid inputs', () => {
    const l1 = new SinglyLinkedList();
    l1.push(1);
    l1.push(2);

    const l2 = new SinglyLinkedList();
    l2.push(1);
    l2.push(2);

    const solution = new SinglyLinkedList();
    solution.push(2);
    solution.push(4);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution);
  });

  test('Returns correct sum when input requires carrying to next place', () => {
    const l1 = new SinglyLinkedList();
    l1.push(1);
    l1.push(3);

    const l2 = new SinglyLinkedList();
    l2.push(9);
    l2.push(1);

    const solution = new SinglyLinkedList();
    solution.push(0);
    solution.push(5);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution);
  });

  test('Returns correct sum when inputs are longer than 2 digits each', () => {
    const l1 = new SinglyLinkedList();
    l1.push(2);
    l1.push(3);
    l1.push(8);
    l1.push(7);
    l1.push(1);

    const l2 = new SinglyLinkedList();
    l2.push(8);
    l2.push(0);
    l2.push(2);
    l2.push(4);
    l2.push(5);

    const solution = new SinglyLinkedList();
    solution.push(0);
    solution.push(4);
    solution.push(0);
    solution.push(2);
    solution.push(7);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution);
  });

  test('Returns correct sum when l1 is longer than l2', () => {
    const l1 = new SinglyLinkedList();
    l1.push(2);
    l1.push(1);
    l1.push(0);
    l1.push(3);
    l1.push(6);

    const l2 = new SinglyLinkedList();
    l2.push(8);
    l2.push(0);
    l2.push(3);

    const solution = new SinglyLinkedList();
    solution.push(0)
    solution.push(2)
    solution.push(3)
    solution.push(3)
    solution.push(6)

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution)
  });

  test('Returns correct sum when l2 is longer than l1', () => {
    const l1 = new SinglyLinkedList();
    l1.push(2);
    l1.push(3);

    const l2 = new SinglyLinkedList();
    l2.push(8);
    l2.push(0);
    l2.push(2);
    l2.push(2);
    l2.push(6);

    const solution = new SinglyLinkedList();
    solution.push(0)
    solution.push(4)
    solution.push(2)
    solution.push(2)
    solution.push(6)

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution);
  });
  test('Returns correct value when final sum needs carrying', () => {
    const l1 = new SinglyLinkedList();
    l1.push(2);
    l1.push(3);
    l1.push(8);
    l1.push(7);
    l1.push(6);

    const l2 = new SinglyLinkedList();
    l2.push(8);
    l2.push(0);
    l2.push(2);
    l2.push(4);
    l2.push(5);

    const solution = new SinglyLinkedList();
    solution.push(0)
    solution.push(4)
    solution.push(0)
    solution.push(2)
    solution.push(2)
    solution.push(1)

    expect(addTwoNumbers(l1, l2)).toStrictEqual(solution)
  });
});