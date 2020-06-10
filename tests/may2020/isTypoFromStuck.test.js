import isTypo from '../../problems/may2020/isTypoFromStuck';

describe('Is Typo From Stuck Key Tests', () => {

  const dictionary = ['two', 'hello', 'cat', 'world', 'dog', 'bird', 'grass', 'green', 'help', 'greet', 'great'];

  test('Returns expected for Example 1', () => {
    const string = 'bbbirrrdddd';

    expect(isTypo(dictionary, string)).toBe(true);
  });

  test('Returns expected for Example 2', () => {
    const string = 'gggraasssa';

    expect(isTypo(dictionary, string)).toBe(false);
  });

  test('Returns false when string does not start at beginning of a word', () => {
    const string = 'ello';

    expect(isTypo(dictionary, string)).toBe(false);
  });

  test('Returns false for string that does not go to end of word', () => {
    const string = 'hell';

    expect(isTypo(dictionary, string)).toBe(false);
  });
});