import reverseString from '../../problems/may2020/reverseString';

describe('Reverse String Tests', () => {

  test('Returns an empty string when given an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('Returns the reversed string for LeetCode Example 1', () => {
    const input = ["h","e","l","l","o"];
    const output = [...input].reverse();

    reverseString(input);
    expect(input).toStrictEqual(output);
  });

  test('Returns the reverse string for LeetCode Example 2', () => {
    const input = ["H","a","n","n","a","h"];
    const output = [...input].reverse();
    reverseString(input);
    expect(input).toStrictEqual(output);
  });

  test('Returns the reversed string for input', () => {
    const input = 'reversed'.split('');
    const output = [...input].reverse();

    reverseString(input);
    expect(input).toStrictEqual(output);
  });
});
