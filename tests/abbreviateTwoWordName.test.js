import abbrevName from '../problems/abbreviateTwoWordName';

describe('Abbrev Two Word Name Tests', () => {

  test('Returns expected outputs for example 1', () => {
    expect(abbrevName('Sam Harris')).toBe('S.H');
  });

  test('Returns expected output for example 2', () => {
    expect(abbrevName('Patrick Feeney')).toBe('P.F');
  });

  test('Returns expected output when first name is not capitalized', () => {
    expect(abbrevName('eric Thomson')).toBe('E.T');
  });

  test('Returns expected output when last name is not capitalized', () => {
    expect(abbrevName('Beavis butthead')).toBe('B.B');
  });

  test('Returns expected output when neither name is capitalied', () => {
    expect(abbrevName('scooby doo')).toBe('S.D');
  });
});
