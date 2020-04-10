import minStack from '../problems/minStack';
import { leetCodeExample1, leetCodeExample2, longerExample, multipleVals, oneVal, allNeg, allPos, } from '../testsData/minStackData';

describe('MinStack Tests', () => {

  test('Returns an empty stack when initialized', () => {
    const newStack = new minStack();
    expect(newStack.stack).toStrictEqual([]);
  });
  
  test('Returns null for top when stack initialized', () => {
    const newStack = new minStack();
    expect(newStack.top()).toBe(null);
  });

  test('Returns null when getMin called on empty stack', () => {
    const newStack = new minStack();
    expect(newStack.getMin()).toBe(null);
  });

  test('Returns false when push is not a number', () => {
    const newStack = new minStack();
    expect(newStack.push('string')).toBe(false);
  });

  test('Returns true when push is a number', () => {
    const newStack = new minStack();
    expect(newStack.push(1)).toBe(true);
  });

  test('Returns the same for top and min when only 1 value', () => {
    expect(oneVal.top()).toBe(oneVal.getMin());
  });

  test('Returns false for pop when no values', () => {
    const newStack = new minStack();
    expect(newStack.pop()).toBe(false);
  })

  test('Returns the expected min with multiple values', () => {    
    expect(multipleVals.getMin()).toBe(-1);
  });

  test('Returns the expected value for the leetCode getMin example1', () => {
    expect(leetCodeExample1.getMin()).toBe(-3);
  });

  test('Returns the expected value for the leetCode getMin example2', () => {
    expect(leetCodeExample2.getMin()).toBe(-2);
  });

  test('Returns the expected value for the leetCode top example', () => {
    expect(leetCodeExample2.top()).toBe(0);
  });

  test('Returns the expected value for a longer example for getMin', () => {
    expect(longerExample.getMin()).toBe(-99);
  });

  test('Returns the expected value for getMin when all values are negative', () => {
    expect(allNeg.getMin()).toBe(-100);
  });

  test('Returns the expected value for getMin when all values are positive', () => {
    expect(allPos.getMin()).toBe(1);
  });

});