import romanToInteger from '../problems/romanToInteger';
import { singleNumeral, multipleNumerals, smallerNumeralBefore, notRomNumerals, } from '../testsData/romanToIntegerData';
import { notString, } from '../testsData/notTypeOfData';

describe('Roman Numerals to Integers Tests', () => {

  test.each(notString)(`It returns 'invalid input' when not a string input`, (i) => {
    expect(romanToInteger(i)).toBe('invalid input');
  });

  test.each(singleNumeral)(`It returns the correct Integer for all single Roman Numerals`, (i, o) => {
    expect(romanToInteger(i)).toBe(o);
  });

  test.each(multipleNumerals)(`It returns the correct Integer for strings with multiple numerals`, (i, o) => {
    expect(romanToInteger(i)).toBe(o);
  });

  test.each(smallerNumeralBefore)(`It returns the correct Integer for strings with smaller Numerals Before`, (i, o) => {
    expect(romanToInteger(i)).toBe(o);
  });
  
  test.each(notRomNumerals)(`It returns 'invalid input' when the contains non-numeral characters`, (i) => {
    expect(romanToInteger(i)).toBe('invalid input');
  });
});