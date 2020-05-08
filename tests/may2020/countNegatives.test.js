import countNegatives from '../../problems/may2020/countNegatives';

describe('Count Negatives Tests', () => {

  test('Returns expected value for Leet Code Example 1', () => {
    const input = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

    expect(countNegatives(input)).toBe(8);
  });

  test('Returns expected value for Leet Code Example 2', () => {
    const input = [[3,2],[1,0]];

    expect(countNegatives(input)).toBe(0);
  });
  test('Returns expected value for Leet Code Example 3', () => {
    const input = [[1,-1],[-1,-1]];

    expect(countNegatives(input)).toBe(3);
  });
  test('Returns expected value for Leet Code Example 4', () => {
    const input = [[-1]];

    expect(countNegatives(input)).toBe(1);
  });

});

