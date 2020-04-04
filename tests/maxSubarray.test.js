import maxSubarray from '../problems/maxSubarray';

describe('maxSubarray Tests', () => {

  test('Returns 0 when array length is 0', () => {
    const arr = [];
    expect(maxSubarray(arr)).toBe(0);
  });

  for (let i = 0; i < 10; i++) {
    let arr = [i];
    test('Returns array[0] when array length is 1 and positive integer', () => {
      expect(maxSubarray(arr)).toBe(i);
    });
  };

  for (let i = 0; i > - 10; i--) {
    let arr = [i];
    test('Returns array[0] when array length is 1 and negative integer', () => {
      expect(maxSubarray(arr)).toBe(i);
    });
  };

  test('Returns the same val as reduced array when all numbers positive integers', () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(i);
    }
    const reduced = arr.reduce((a, b) => a + b, 0);
    expect(maxSubarray(arr)).toBe(reduced);
  });

  test('Returns only the first value when all indexes are negative integers', () => {
    const arr = [];
    for (let i = -1; i > -100; i--) {
      arr.push(i);
    };
    expect(maxSubarray(arr)).toBe(-1);
  });

  test('Returns expected with the example array from LeetCode', () => {
    const arr =  [-2 , 1, -3 , 4, -1, 2, 1, -5, 4];
    expect(maxSubarray(arr)).toBe(6);
  });

  test('Returns expected subarray', () => {
    const arr = [1, 5, -1, 0, 10];
    expect(maxSubarray(arr)).toBe(15);
  });

  // how to test large randomized array neg and pos with inserted expected?


});
