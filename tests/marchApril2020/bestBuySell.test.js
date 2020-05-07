import maxProfit from '../../problems/marchApril2020/bestBuySell';
import { notArray } from '../../testsData/notTypeOfData';
import { leetCodeExamples, longerDataSet, notAllSingleDigit, } from '../../testsData/buySellData';

describe('bestBuySell (Difficulty Easy) Testing', () => {

  test.each(notArray)('Returns invalid input if input not array', (i) => {
    expect(maxProfit(i)).toBe('invalid input');
  });

  test(`Returns 'invalid input' when input is empty array`, () => {
    expect(maxProfit([])).toBe('invalid input');
  });

  test.each(leetCodeExamples)('Returns the expected for each of the LeetCode Examples', (i, o) => {
    expect(maxProfit(i)).toBe(o);
  });

  test('Returns 0 when amounts constantly decline', () => {
    expect(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(0);
  });

  test('Returns the expectd output for a longer set of data', () => {
    expect(maxProfit(longerDataSet)).toBe(58);
  });

  test('Returns the expected value when input includes numbers larger than 10', () => {
    expect(maxProfit(notAllSingleDigit)).toBe(849806)
  });

});
