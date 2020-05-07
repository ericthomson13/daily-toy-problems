import numCompliment from '../../problems/marchApril2020/numberCompliment';

describe('Number Compliment Test', () => {

  test('Returns Expected for Leet Code example 1', () => {
    expect(numCompliment(5)).toBe(2);
  });

  test('Returns expected for Leet Code example 2', () => {
    expect(numCompliment(1)).toBe(0);
  });
});
