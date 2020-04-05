import maxProfit from '../problems/bestBuySell';
import { notArray } from '../testsData/notTypeOfData';

describe('bestBuySell (Difficulty Easy) Testing', () => {

  test.each(notArray)('Returns invalid input if input not array', (i) => {
    expect(maxProfit(i)).toBe('invalid input');
  });


});