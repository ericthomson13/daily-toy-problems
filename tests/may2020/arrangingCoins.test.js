import arrangeCoins from '../../problems/may2020/arrangingCoins';

const data = [
  [8, 3],
  [3, 2],
  [1, 1],
  [50, 9],
  [100, 13],
];

describe('Arranging Coins Tests', () => {
  test.each(data)('Returns expected value for inputs', (i, o) => {
    expect(arrangeCoins(i)).toBe(o);
  });
});