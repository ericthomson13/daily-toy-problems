import countElements from '../problems/countElements';
import { leetCodeExamples, thousandArray, otherTestCases, } from '../testsData/countElementsData';
import { notArray, } from '../testsData/notTypeOfData';

describe('countElements Tests', () => {

  test.each(notArray)(`Returns 'invalid input' when input is not array`, (i) => {
    expect(countElements(i)).toBe('invalid input');
  });

  test(`Returns invalid input when array is empty`, () => {
    expect(countElements([])).toBe('invalid input');
  });

  test(`Return invalid input when array is longer than 1000 items`, () => {
    expect(countElements(thousandArray)).toBe('invalid input');
  });

  test.each(leetCodeExamples)(`Returns the expected output for LeetCode examples`, (i, o) => {
    expect(countElements(i)).toBe(o);
  });

  test.each(otherTestCases)(`Returns the expected output for other examples`, (i, o) => {
    expect(countElements(i)).toBe(o);
  });
  
});