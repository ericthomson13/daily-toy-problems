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
  for (let word in dictionaryTrees) {
    let i = 0;
    let current = dictionaryTrees;

    while (i < word.length) {
      if (!current[word[i]]) {
        current[word[i]] = {};
        current = current[word[i]];
      }
      i++;
    }
  }

  // traverse tree until either ends or word is checked
  let current = dictionaryTrees;

  for (let i = 0; i < s.length; i++) {
    if (!current[s[i]]) {
      return false;
    } else if (s[i] !== s[i + 1]){
      current = current[s[i]];
    }
  }

  // returns true if doesn't error out
  return true;
};

export default isTypo;
