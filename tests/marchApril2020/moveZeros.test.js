import moveZeros from '../../problems/marchApril2020/moveZeros';
import { validInputs, } from '../../testsData/moveZerosData';
import { notArray } from '../../testsData/notTypeOfData';

describe('moveZeros Tests', () => {

  test.each(notArray)('Returns invalid input when input is not Array', (i) => {
    expect(moveZeros(i)).toBe('invalid input');
  });

  test('Returns null when empty array input', () => {
    expect(moveZeros([])).toBe(null);
  });

  test.each(validInputs)('Returns as expected when inputs are valid', (i, o) => {
    expect(moveZeros(i)).toStrictEqual(o);
  });
});
