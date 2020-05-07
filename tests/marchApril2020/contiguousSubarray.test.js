import findMaxLength from '../../problems/marchApril2020/contiguousSubarray';
import { notArray, } from '../../testsData/notTypeOfData';

describe('Find Max Length of Contiguous Subarray Tests', () => {

  test.each(notArray)(`Returns 'input must be an array' when input not an array`, (i) => {
    expect(findMaxLength(i)).toBe('input must be an array');
  });

  test(`Returns 'input must be a binary array' when given a non-binary array of numbers`, () => {
    expect(findMaxLength([1, 3, 2, 3])).toBe('input must be a binary array');
  });

  test(`Returns 'input must be a binary array' when given an array of mixed data types`, () => {
    expect(findMaxLength(notArray)).toBe('input must be a binary array');
  });

  test(`Returns expected value for LeetCode Example 1`, () => {
    expect(findMaxLength([0, 1])).toBe(2);
  });

  test(`Returns the expected vale for LeetCode Example 2`, () => {
    expect(findMaxLength([0, 1, 0])).toBe(2);
  });

  test(`Returns the length of the array when whole array is balanced`, () => {
    const balanced = [];
    for (let i = 0; i < 101; i++) {
      i % 2 === 0 ? balanced.push(0) : balanced.push(1);
    }
    expect(findMaxLength(balanced)).toBe(100);
  });

  test(`Returns the expected subarray length`, () => {
    const subarray = [1, 0, 0, 0, 1, 1, 1, 0, 0, 1];
    const input = [];
    for (let i = 0; i < 2000; i++) {
      input.push(0);
    }
    input.splice(Math.floor(Math.random() * 2000), 0, ...subarray);

    expect(findMaxLength(input)).toBe(subarray.length);
  });
});