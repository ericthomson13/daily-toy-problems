import minPathSum from '../../problems/marchApril2020/minPathSum';

describe('Minimum Path Sum Tests', () => {

  test('Returns 0 when empty matrix input', () => {
    expect(minPathSum([])).toBe(0);
  });

  test('Returns the expected output for the Leet Code Example', () => {
    const input = [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ];

    expect(minPathSum(input)).toBe(7);
  });
})