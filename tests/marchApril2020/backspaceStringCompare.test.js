import backspaceCompare from '../../problems/marchApril2020/backSpaceStringCompare';
import { notString, } from '../../testsData/notTypeOfData';
import { leetCodeExamples, longStrings, } from '../../testsData/backspaceStringCompareData';

describe('Backspace String Comapare Tests', () => {

  test(`Returns 'invalid input' when there are no inputs`, () => {
    expect(backspaceCompare()).toBe('invalid input');
  });

  test.each(notString)(`Returns 'invalid input' when first argument is not a string`, (i) => {
    expect(backspaceCompare(i, 'string')).toBe('invalid input');
  });

  test.each(notString)(`Returns 'invalid input' when second argument is not a string`, (i) => {
    expect(backspaceCompare('string', i)).toBe('invalid input');
  });

  test.each(notString)(`Returns 'invalid input' when both arguments are not strings`, (i) => {
    expect(backspaceCompare(i, i)).toBe('invalid input');
  });

  test.each(leetCodeExamples)(`Returns expected output for all leetCode Examples`, (i, o) => {
    expect(backspaceCompare(i[0], i[1])).toBe(o);
  });

  test(`Returns the expected value when strings are at the upper length constraint`, () => {
    expect(backspaceCompare(longStrings[0], longStrings[1])).toBe(true);
  });

  test(`Returns true when result of backspaces is empty strings`, () => {
    expect(backspaceCompare('d#', 'd#d#d#')).toBe(true);
  });

  test(`Returns true when strings are identical but no backspaces`, () => {
    expect(backspaceCompare('slkdfjaklsdf', 'slkdfjaklsdf')).toBe(true);
  });

  test(`Returns false when strings are not identical with no backspaces`, () => {
    expect(backspaceCompare('asdkfjtsbsdf', 'lkajsdflk')).toBe(false);
  });

  test(`Returns true when backspaces are present and outputs should match`, () => {
    expect(backspaceCompare('asdf##', 'aa#ss#')).toBe(true);
  });

});
