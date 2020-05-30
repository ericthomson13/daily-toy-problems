/*

Write a function that checks whether a string is a palindrome.

A palindrome is a string that is the same when read forwards as backwards.

*/

export const palindromeStr = (string) => {
  if (string.length < 2) return true;
  string = string.toLowerCase();

  let start = 0;
  let end = string.length - 1;

  // list of cases to skip over in string
  const skipCase = {
    ' ': true,
    ',': true,
    '.': true,
    '!': true,
    ':': true,
  };

  while (start <= end) {
    if (skipCase[string[start]]) {
      start++;
      continue;
    }
    if (skipCase[string[end]]) {
      end--;
      continue;
    }
    if (string[start] !== string[end]) {
      return false;
    }

    end--;
    start++;
  };

  return true;
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const isPalindrome2 = (s) => {
    const chars = new Set();
    letters.forEach((letter) => chars.add(letter));

    const arr = s.toLowerCase().split('').filter((char) => chars.has(char));
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) return false;
        start++;
        end--;
    }

    return true;
};

export const regexPalindrome = (s) => {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let start = 0,
  end = newStr.length - 1;

  while (start < end) {
    if (newStr[start] !== newStr[end]) return false;
    start++;
    end--;
  }

  return true;
}