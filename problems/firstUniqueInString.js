/*

Code prompt found at:
https://leetcode.com/problems/first-unique-character-in-a-string/
Difficulty: Medium

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/*
First time using Map

Map allows for object like structure but tracks insertion order

MDN Doc:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

/*
First time using for...of

Returns a tuple when used over array, allows for array descructuring to be used
MDN Doc:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/

const firstUnique = (s) => {
  if (!s.length) return -1;

  const chars = new Map();

  for (let i = 0; i < s.length; i++) {
    if (chars.has(s[i])) {
      chars.set(s[i], null);
    } else {
      chars.set(s[i], i);
    }
  }

  for (let [char, i] of chars) {
    if (i !== null) return i;
  }

  return -1;
}