/*

Given a dictionary of valid words, write a function isTypoBecauseStuckKey() that accepts a string to determine if the string has a typo that is strictly caused by a stuck key.

Example 1:
  Input:
  Dictionary: { hello, cat, world, dog, bird, grass, green, help, greet, great }
  String: bbbirrrdddd
  Output: True
  Explanation: The character's 'b', 'r', & 'd' all repeat. Assuming their keys got stuck, we can form the word 'bird', which exists in the dictionary.

Example 2:
  Input:
  Dictionary: { hello, cat, world, dog, bird, grass, green, help, greet, great }
  String: gggraasssa
  Output: False
  Explanation: The a at the end is not the result of a stuck key, and thus it is impossible for it to exist in the dictionary.

*/

const isTypo = (d, s) => {
  // object for the trees to start from
  const dictionaryTrees = {};

  // add the first letter of all words in dictionary to dictionaryTrees
  for (let word of d) {
    let i = 0;
    let current = dictionaryTrees;

    while (i < word.length) {
      if (!current[word[i]]) {
        current[word[i]] = {};
        current = current[word[i]];
      }
      if (i === word.length - 1) {
        current.end = true;
      }
      i++;
    }
  }

  // traverse tree until either ends or word is checked
  let current = dictionaryTrees;
  let j = 0;

  while (j < s.length) {
    if (!current[s[j]]) {
      return false;
    } else if (s[j] !== s[j + 1]) {
      current = current[s[j]];
    }
    j++;
  }

  // returns true if doesn't error out
  return current.end || false;
};

export default isTypo;
