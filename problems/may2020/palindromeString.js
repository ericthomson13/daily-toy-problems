/*

Write a function that checks whether a string is a palindrome.

A palindrome is a string that is the same when read forwards as backwards.

*/

const palindromeStr = (string) => {
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

export default palindromeStr;
