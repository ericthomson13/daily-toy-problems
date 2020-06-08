import { powerOfTwoBit, powerOfTwoLog } from '../../problems/may2020/powerOfTwo';

const leetCodeExamples = [
  [1, true],
  [16, true],
  [218, false]
];

describe('Power of Two Bitwise Operators Tests', () => {

  test('Returns false when number is less than 1', () => {
    expect(powerOfTwoBit(-(Math.random() * 1000))).toBe(false);
  });

  test('Returns true when input is 2', () => {
    expect(powerOfTwoBit(2)).toBe(true);
  });

  test.each(leetCodeExamples)('Returns expected for LeetCode Examples', (i, o) => {
    expect(powerOfTwoBit(i)).toBe(o);
  });

  test('Returns true for random number to the power of 2', () => {
    const input = Math.pow(2, Math.floor(Math.random() * 1000));
    expect(powerOfTwoBit(input)).toBe(true);
  });
});

describe('Power of Two Log Tests', () => {

  test('Returns false when number is less than 1', () => {
    expect(powerOfTwoLog(-(Math.random() * 1000))).toBe(false);
  });

  test('Returns true when input is 2', () => {
    expect(powerOfTwoLog(2)).toBe(true);
  });

  test.each(leetCodeExamples)('Returns expected for LeetCode Examples', (i, o) => {
    expect(powerOfTwoLog(i)).toBe(o);
  });

  test('Returns true for random number to the power of 2', () => {
    const input = Math.pow(2, Math.floor(Math.random() * 1000));
    expect(powerOfTwoLog(input)).toBe(true);
  });
});


