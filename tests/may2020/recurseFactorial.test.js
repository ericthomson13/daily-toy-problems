import recursiveFactorial from '../../problems/may2020/recurseFactorial';

describe('Recursive Factorial Tests', () => {

  test('Returns 0 when input is 0', () => {
    expect(recursiveFactorial(0)).toBe(0);
  });

  test('Returns 1 when input is 1', () => {
    expect(recursiveFactorial(1)).toBe(1);
  });

  test('Returns null when input is less than 0', () => {
    expect(recursiveFactorial(-10)).toBe(null);
  });

  test('Returns 2 when input is 2', () => {
    expect(recursiveFactorial(2)).toBe(2);
  });

  test('Returns 6 when input is 3', () => {
    expect(recursiveFactorial(3)).toBe(6);
  });

  test('Returns when input is 10', () => {
    expect(recursiveFactorial(10)).toBe(3628800);
  });
});