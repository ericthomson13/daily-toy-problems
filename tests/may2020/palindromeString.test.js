import palindromeStr from '../../problems/may2020/palindromeString';

describe('Palindrome String Test', () => {

  test.each(['', '1'])('Returns true when given a string with length of 0 or 1', (i) => {
    expect(palindromeStr(i)).toBe(true);
  });

  test.each(['string', 'none', 'not', 'false'])('Returns false when string is not a palindrome', (i) => {
    expect(palindromeStr(i)).toBe(false);
  });

  test.each(['anna', 'civic', 'kayak', 'level', 'madam', 'mom', 'noon', 'racecar', 'Red rum sir, is murder'])('Returns true when string is a palindrome', (i) => {
    expect(palindromeStr(i)).toBe(true);
  });

});