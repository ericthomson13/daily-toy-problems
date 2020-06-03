import largestUniqueRemoval from '../../problems/may2020/largestUniqueSetOfChars';

describe('largest Unique Removal Tests', () => {

  test('Error when length is too short', () => {
    const input = 'This is too short';
    expect(largestUniqueRemoval(input)).toBe('Input length is shorter than 50');
  });

  test('Returns entire input when min length is 0', () => {
    const input = 'abcdefghijklmnopqrstuvwxyz';
    const result = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ];

    expect(largestUniqueRemoval(input, 0)).toStrictEqual(result);
  });

  const inputParagraph = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`;

  const output = ["I", "f", " ", "y", "o", "u", "w", "a", "n", "t", "j", "m", "p", "s", "r", "h", "e", "c", "l", "k", "i", "g", "b", ",", "’", ":", "q", "v", "d", "5", "0", "."];

  test('Returns expected result for input Paragraph', () => {
    expect(largestUniqueRemoval(inputParagraph)).toStrictEqual(output);
  });

  test('Checks that input length and result length are within bounds', () => {
    expect(largestUniqueRemoval(inputParagraph).length <= inputParagraph.length - 50).toBe(true);
  });
});
