import numberToEnglish from '../../problems/may2020/numberToEnglish';
import { under20, tensAbove20Under100, numsAbove20Under100, } from '../../testsData/numberToEnglishData';

describe('Number to English Tests', () => {

  test.each(under20)('Returns expected string for integers 20 and under', (i, o) => {
    expect(numberToEnglish(i)).toBe(o);
  });

  test.each(tensAbove20Under100)('Returns expected string for tens in between 20 and 100', (i, o) => {
    expect(numberToEnglish(i)).toBe(o);
  });

  test.each(numsAbove20Under100)('Returns expected string for random numbers in between 20 and 100', (i, o) => {
    expect(numberToEnglish(i)).toBe(o);
  });
});