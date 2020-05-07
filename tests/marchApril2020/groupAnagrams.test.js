import groupAnagrams from '../../problems/marchApril2020/groupAnagrams';
import { notArray } from '../../testsData/notTypeOfData';

describe('GroupAnagrams Tests', () => {

  test('Returns the expected value for the LeetCode Example', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["eat", "tea", "ate",], ["tan", "nat",], ["bat"]];
    expect(groupAnagrams(input)).toStrictEqual(output);
  });

  test.each(notArray)(`Returns 'invalid input' when input is not an array`, (i) => {
    expect(groupAnagrams(i)).toBe('invalid input');
  });

  test('Returns empty array when input is empty array', () => {
    expect(groupAnagrams([])).toStrictEqual([]);
  });

  test('Returns the expected value for another example', () => {
    const input = ['impels', 'simple', 'night', 'thing', 'aba', 'baa', 'aab'];
    const output = [['impels', 'simple'], ['night', 'thing'], ['aba', 'baa', 'aab']];
    expect(groupAnagrams(input)).toStrictEqual(output);
  });
});
