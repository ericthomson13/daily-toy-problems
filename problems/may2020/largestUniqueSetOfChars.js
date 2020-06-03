/*

Write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.

Example: [‘H’, ‘i’, ‘!’, ‘ ’]

*/

// This considers uppercase, lowercase, numbers and punctuation as different characters
const largestUniqueRemoval = (input, minLength = 50) => {
  // throw error if string is shorter than minimum length
  if (input.length < minLength) {
    return `Input length is shorter than ${minLength}`;
  }

  const result = new Set();
  // placeholder so don't have to modify input string
  let limit = input.length - minLength;
  // track movement through spacesRemoved
  let i = 0;

  // iterate through spacesRemoved
  while (limit > 0 && i < input.length) {
    if (!result.has(input[i])) {
      result.add(input[i]);
      limit--;
    }
    i++;
  }

  // returns array of values rather than the set
  return [...result];
};

export default largestUniqueRemoval;
