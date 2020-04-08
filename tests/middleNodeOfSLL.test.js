import { middleNode, middleNodeUsingLength, } from '../problems/middleNodeOfSLL';
import { notObject, } from '../testsData/notTypeOfData';
import {
  leetCodeExampleInput,
  leetCodeExampleOutput,
  singleNode,
  oddNumNodes,
  evenNumNodes,
  objectNotList,
  longList,
  emptyList,
} from '../testsData/middleNodeOfSLLData';

describe('Middle Node of Singly Linked List Tests', () => {

  test.each(notObject)(`Returns 'invalid input' when input is not an Object`, (i) => {
    expect(middleNode(i)).toBe('invalid input');
  });

  test(`Returns 'invalid input' when object not instance of SinglyLinkedList`, () => {
    expect(middleNode(objectNotList)).toBe('invalid input');
  });

  test(`Returns 'invalid input' with empty list`, () => {
    expect(middleNode(emptyList)).toBe('invalid input')
  });

  // Returns the node with the list length, head and tail not the same as example output because returns from node at middle index on
  test(`Returns the expected value for the leetCode Example`, () => {
    expect(middleNode(leetCodeExampleInput).val).toBe(leetCodeExampleOutput.head.val);
  });
  
  test(`Returns the expected next node for the leetCode Example`, () => {
    expect(middleNode(leetCodeExampleInput).next.val).toBe(leetCodeExampleOutput.head.next.val);
  });

  test(`Returns the expected tail for the leetCode Example`, () => {
    expect(middleNode(leetCodeExampleInput).next.next.val).toBe(leetCodeExampleOutput.tail.val);
  });

  test(`Returns the only node when one node in list`, () => {
    expect(middleNode(singleNode)).toBe(singleNode.head);
  });

  test(`Returns the middle node with an odd length of nodes`, () => {
    expect(middleNode(oddNumNodes).val).toBe(4);
  });

  test(`Returns the higher of the two middle nodes of even length list`, () => {
    expect(middleNode(evenNumNodes).val).toBe(5);
  });

  test(`Returns the correct value when list at max length constraint`, () => {
    expect(middleNode(longList).val).toBe(50);
  });

});


describe('Middle Node Using Length Tests', () => {

  test.each(notObject)(`Returns 'invalid input' when input is not an Object`, (i) => {
    expect(middleNodeUsingLength(i)).toBe('invalid input');
  });

  test(`Returns 'invalid input' when object not instance of SinglyLinkedList`, () => {
    expect(middleNodeUsingLength(objectNotList)).toBe('invalid input');
  });

  test(`Returns 'invalid input' with empty list`, () => {
    expect(middleNodeUsingLength(emptyList)).toBe('invalid input')
  });

  // Returns the node with the list length, head and tail not the same as example output because returns from node at middle index on
  test(`Returns the expected value for the leetCode Example`, () => {
    expect(middleNodeUsingLength(leetCodeExampleInput).val).toBe(leetCodeExampleOutput.head.val);
  });
  
  test(`Returns the expected next node for the leetCode Example`, () => {
    expect(middleNodeUsingLength(leetCodeExampleInput).next.val).toBe(leetCodeExampleOutput.head.next.val);
  });

  test(`Returns the expected tail for the leetCode Example`, () => {
    expect(middleNodeUsingLength(leetCodeExampleInput).next.next.val).toBe(leetCodeExampleOutput.tail.val);
  });

  test(`Returns the only node when one node in list`, () => {
    expect(middleNodeUsingLength(singleNode)).toBe(singleNode.head);
  });

  test(`Returns the middle node with an odd length of nodes`, () => {
    expect(middleNodeUsingLength(oddNumNodes).val).toBe(4);
  });

  test(`Returns the higher of the two middle nodes of even length list`, () => {
    expect(middleNodeUsingLength(evenNumNodes).val).toBe(5);
  });

  test(`Returns the correct value when list at max length constraint`, () => {
    expect(middleNodeUsingLength(longList).val).toBe(50);
  });
});

// figure out which one is more performant at the upper length constraint
xdescribe('Time Performance with Large List', () => {
  test('Expects middleNodeUsingLength to be faster than middleNode', () => {
    const t1m = new Date().toUTCString()
    middleNode(longList);
    const t2m = new Date().toUTCString();
    const time1 = t2m - t1m;
    const t1l = new Date().toUTCString();
    middleNodeUsingLength(longList);
    const t2l = new Date().toUTCString();
    const time2 = t2l - t1l;
    expect(time1).toBeGreaterThan(time2);
  });
});