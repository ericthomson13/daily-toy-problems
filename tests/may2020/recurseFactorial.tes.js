import recusiveFactorial from '../../problems/may2020/recurseFactorial';
import recursiveFactorial from '../../problems/may2020/recurseFactorial';

describe('Recursive Factorial Tests', () => {

  test('Returns 0 when input is 0', () => {
    expect(recursiveFactorial(0)).toBe(0);
  });
});