import pallindromeNumber from '../problems/pallindromeNumber';
import { notNumbers, endsZero, singleDigit, pallindromes, notPallindromes, } from '../testData/pallindromeNumberData';

describe('pallindromeNumberTests', () => {
  
  test('It should return true when 0 is input', () => {
    expect(pallindromeNumber(0)).toBe(true);
  });

  test.each(notNumbers)('It returns false when input is not a number', (i, o) => {
    expect(pallindromeNumber(i)).toBe(o);
  });

  test.each(endsZero)('It tests nums ending in 0', (i, o) => {
    expect(pallindromeNumber(i)).toBe(o);
  });

  test.each(singleDigit)('It returns true with single digit numbers', (i, o) => {
    expect(pallindromeNumber(i)).toBe(o);
  });

  test.each(pallindromes)('It returns true with numbers that are pallindromes', (i, o) => {
    expect(pallindromeNumber(i)).toBe(o);
  });

  test.each(notPallindromes)('It returns false with numbers that are not pallindromes', (i, o) => {
    expect(pallindromeNumber(i)).toBe(o);
  });

});