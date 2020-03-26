import reverseInteger from '../problems/reverseInteger';

describe('reverseInteger Tests', () => {
  test('It revereses a small postitive integer', () => {
    expect(reverseInteger(32)).toBe(23);
  });
  test('It reverses a small negative integer', () => {
    expect(reverseInteger(-24)).toBe(-42);
  });
  test('It reverses a large positive integer', () => {
    expect(reverseInteger(134327512)).toBe(215723431);
  });
  test('It reverses a large negative integer', () => {
    expect(reverseInteger(-134327512)).toBe(-215723431);
  });
  test('It returns 0 when positive integer is too large', () => {
    expect(reverseInteger(13432751212312312)).toBe(0);
  });
  test('It returns 0 when negative integer is too large', () => {
    expect(reverseInteger(-1323551212312312)).toBe(0);
  });
  test('It returns 0 when 0 is input', () => {
    expect(reverseInteger(0)).toBe(0);
  });
  test('It returns the same number when positive single digit numbers are input', () => {
    expect(reverseInteger(1)).toBe(1);
  });
  test('It returns the same number when negative single digit numbers are input', () => {
    expect(reverseInteger(-3)).toBe(-3);
  });
  test('It returns the correct number with a positive input number ends in 0', () => {
    expect(reverseInteger(10)).toBe(1);
  });
  test('It returns the correct number with a negative input number ends in 0', () => {
    expect(reverseInteger(-20)).toBe(-2);
  });
});
