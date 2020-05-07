import pallindromeNumber from '../../problems/marchApril2020/pallindromeNumber';
import { endsZero, singleDigit, pallindromes, notPallindromes, } from '../../testsData/pallindromeNumberData';
import { notNumbers,} from '../../testsData/notTypeOfData';

describe('pallindromeNumberTests', () => {

  test('It should return true when 0 is input', () => {
    expect(pallindromeNumber(0)).toBe(true);
  });

  test.each(notNumbers)('It returns false when input is not a number', (i) => {
    expect(pallindromeNumber(i)).toBe(false);
  });

  test.each(endsZero)('It tests nums ending in 0', (i) => {
    expect(pallindromeNumber(i)).toBe(false);
  });

  test.each(singleDigit)('It returns true with single digit numbers', (i) => {
    expect(pallindromeNumber(i)).toBe(true);
  });

  test.each(pallindromes)('It returns true with numbers that are pallindromes', (i) => {
    expect(pallindromeNumber(i)).toBe(true);
  });

  test.each(notPallindromes)('It returns false with numbers that are not pallindromes', (i) => {
    expect(pallindromeNumber(i)).toBe(false);
  });

});