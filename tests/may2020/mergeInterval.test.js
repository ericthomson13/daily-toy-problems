import merge from '../../problems/may2020/mergeInterval';

describe('Merge Interval Tests', () => {

  test('Returns expected output for Leet Code Example 1', () => {
    const input = [[1,3],[2,6],[8,10],[15,18]];
    const output = [[1,6],[8,10],[15,18]];

    expect(merge(input)).toStrictEqual(output);
  });

  test('Returns expected output for Leet Code Example 2', () => {
    const input = [[1,4],[4,5]];
    const output = [[1,5]];

    expect(merge(input)).toStrictEqual(output);
  });

  test('Return expected output for Leet Code Example 3', () => {
    const input = [[1, 4], [0, 4]];
    const output = [[0, 4]];

    expect(merge(input)).toStrictEqual(output);
  });

  test('Returns expected output for Leet Code Example 4', () => {
    const input =  [[1,4],[0,0]];
    const output = [[0,0],[1,4]];

    expect(merge(input)).toStrictEqual(output);
  });

  test('Returns expected output for input', () => {
    const input = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
    const output = [[1,3],[4,7]];

    expect(merge(input)).toStrictEqual(output);
  });


});
