import stringShift from '../problems/stringShift';
import { notString, notArray } from '../testsData/notTypeOfData';

describe('String Shift Tests', () => {

  test.each(notString)(`Returns 'invalid input' if first argument is not a string`, (i) => {
    expect(stringShift(i, [])).toBe('invalid input');
  });

  test.each(notArray)(`Returns 'invalid input' if second argument is not an array`, (i) => {
    expect(stringShift('string', i)).toBe('invalid input');
  });

  test('Returns expected output for Leet Code Example 1', () => {
    expect(stringShift('abc', [[0,1],[1,2]])).toBe('cab');
  });

  test('Returns expected output for Leet Code Example 2', () => {
    expect(stringShift('abcdefg',  [[1,1],[1,1],[0,2],[1,3]])).toBe('efgabcd');
  });

});
