import { lastStoneWeight, queueLastStoneWeight, } from '../../problems/marchApril2020/lastStoneWeight';
import { notArray, } from '../../testsData/notTypeOfData';

describe('Last Stone Weight Tests', () => {

  test.each(notArray)(`Returns 'invalid input' when input is not an array`, (i) => {
    expect(lastStoneWeight(i)).toBe('invalid input');
  });

  test('Returns 0 when given an empty array', () => {
    expect(lastStoneWeight([])).toBe(0);
  });

  test('Returns input when given an array with length of 1', () => {
    expect(lastStoneWeight([1])).toBe(1);
  });

  test('Returns the expected value for the Leet Code example', () => {
    expect(lastStoneWeight([2,7,4,1,8,1])).toBe(1);
  });

  test('Returns the expected value for an input', () => {
    expect(lastStoneWeight([1, 1, 4, 2, 12])).toBe(4);
  });
});

describe('Priority queue Last Stone Weight Tests', () => {
  test.each(notArray)(`Returns 'invalid input' when input is not an array`, (i) => {
    expect(queueLastStoneWeight(i)).toBe('invalid input');
  });

  test('Returns 0 when given an empty array', () => {
    expect(queueLastStoneWeight([])).toBe(0);
  });

  test('Returns input when given an array with length of 1', () => {
    expect(queueLastStoneWeight([1])).toBe(1);
  });

  test('Returns the expected value for the Leet Code example', () => {
    expect(queueLastStoneWeight([2,7,4,1,8,1])).toBe(1);
  });

  test('Returns the expected value for an input', () => {
    expect(queueLastStoneWeight([1, 1, 4, 2, 12])).toBe(4);
  });
})