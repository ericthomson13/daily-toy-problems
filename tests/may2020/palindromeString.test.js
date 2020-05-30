import { palindromeStr, isPalindrome2, } from '../../problems/may2020/palindromeString';

const palindromes = ['anna', 'civic', 'kayak', 'level', 'madam', 'mom', 'noon', 'racecar', 'Red rum sir, is murder', "A man, a plan, a canal: Panama"];
const notPalindromes = ['string', 'none', 'not', 'false'];
const short = ['', '1'];

describe('Palindrome String Tests', () => {

  test.each(short)('Returns true when given a string with length of 0 or 1', (i) => {
    expect(palindromeStr(i)).toBe(true);
  });

  test.each(notPalindromes)('Returns false when string is not a palindrome', (i) => {
    expect(palindromeStr(i)).toBe(false);
  });

  test.each(palindromes)('Returns true when string is a palindrome', (i) => {
    expect(palindromeStr(i)).toBe(true);
  });
});

describe('Palindrome Exampe 2 Tests', () => {

  test.each(short)('Returns true when given a string with length of 0 or 1', (i) => {
    expect(isPalindrome2(i)).toBe(true);
  });

  test.each(notPalindromes)('Returns false when string is not a palindrome', (i) => {
    expect(isPalindrome2(i)).toBe(false);
  });

  test.each(palindromes)('Returns true when string is a palindrome', (i) => {
    expect(isPalindrome2(i)).toBe(true);
  });
});
