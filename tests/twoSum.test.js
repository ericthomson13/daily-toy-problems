import twoSum from '../problems/twoSum';

describe('twoSum Tests', () => {
  test('it returns invalid when an array with length 0 is input', () => {
    expect(twoSum([], 9)).toBe('invalid nums input');
  });
  test('it returns the appropriate value in the 0 index of the tuple', () => {
    expect(twoSum([2, 7, 11, 15], 9)[0]).toBe(0);
  });
  test('it returns the appropriate value in the 1 index of the tuple', () => {
    expect(twoSum([2, 7, 11, 15], 9)[1]).toBe(1);
  });
  test('it returns invalid target when target is not a number', () => {
    expect(twoSum([2, 7, 11, 15], 'a')).toBe('target value invalid');
  });
});