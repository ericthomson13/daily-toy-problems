import findDiagonalOrder from '../../problems/may2020/diagonalTraverseII';

describe('Diagonal Traverse II Tests', () => {
  test('Returns expected for Leet Code Example 1', () => {
    const input = [[1,2,3],[4,5,6],[7,8,9]];
    const output = [1,4,2,7,5,3,8,6,9];

    expect(findDiagonalOrder(input)).toStrictEqual(output);
  });

  test('Returns expected for Leet Code Example 2 that is not complete matrix', () => {
    const input =  [[1,2,3],[4],[5,6,7],[8],[9,10,11]];
    const output =  [1,4,2,5,3,8,6,9,7,10,11];

    expect(findDiagonalOrder(input)).toStrictEqual(output);
  });
});