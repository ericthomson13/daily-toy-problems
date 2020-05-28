import sumOfDigits from '../../problems/may2020/sumOfDigits';

describe('Recursive sum of Digits Tests', () => {
  test.each([1, 2, 3, 4, 5, 6, 7, 8, 9 ])('Returns digit when under 10', (i) => {
    expect(sumOfDigits(i)).toBe(i);
  });

  test('Returns 1 when input is 10', () => {
    expect(sumOfDigits(10)).toBe(1);
  });

  test('Returns 2 when input is 11', () => {
    expect(sumOfDigits(11)).toBe(2);
  });

  test('Returns 3 when input is 111', () => {
    expect(sumOfDigits(111)).toBe(3);
  });

  test('Returns when input is 1378466', () => {
    expect(sumOfDigits(1378466)).toBe(35);
  });
});
