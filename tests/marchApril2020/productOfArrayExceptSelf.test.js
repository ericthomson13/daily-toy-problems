import { productOfArrayTwoPass, productOfArrayOnePass, } from '../../problems/marchApril2020/productOfArrayExceptSelf';
import { notArray, } from '../../testsData/notTypeOfData';
import { leetCodeTestCase, leetCodeTestCaseOutput, } from '../../testsData/productOfArrayExceptSelfData';

describe('Product of Array Except Self Two Pass', () => {

  test.each(notArray)(`Returns 'invalid input' when input is not an array`, (i) => {
    expect(productOfArrayTwoPass(i)).toBe('invalid input');
  });

  test('Returns the input when array length is 1', () => {
    expect(productOfArrayTwoPass([1])).toStrictEqual([1]);
  });

  test('Returns the array reversed when only 2 items', () => {
    const input = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    expect(productOfArrayTwoPass(input)).toStrictEqual(input.reverse());
  });

  test('Returns expected output for Leet Code Example', () => {
    expect(productOfArrayTwoPass([1,2,3,4])).toStrictEqual([24,12,8,6]);
  });

  test('Returns expected for larger Leet Code Example', () => {
    expect(productOfArrayTwoPass(leetCodeTestCase)).toStrictEqual(leetCodeTestCaseOutput);
  });

});

describe('Product of Array Except Self One Pass', () => {
  test.each(notArray)(`Returns 'invalid input' when input is not an array`, (i) => {
    expect(productOfArrayOnePass(i)).toBe('invalid input');
  });

  test('Returns the input when array length is 1', () => {
    expect(productOfArrayOnePass([1])).toStrictEqual([1]);
  });

  test('Returns the array reversed when only 2 items', () => {
    const input = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    expect(productOfArrayOnePass(input)).toStrictEqual(input.reverse());
  });

  test('Returns expected output for Leet Code Example', () => {
    expect(productOfArrayOnePass([1,2,3,4])).toStrictEqual([24,12,8,6]);
  });

  test('Returns expected for larger Leet Code Example', () => {
    expect(productOfArrayOnePass(leetCodeTestCase)).toStrictEqual(leetCodeTestCaseOutput);
  });
});
