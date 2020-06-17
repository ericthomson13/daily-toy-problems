import rotateMatrix from '../../problems/may2020/rotateMatrix';

describe('Rotate Matrix Tests', () => {

  test('Returns nested array when given empty array', () => {
    const input = [[]];

    expect(rotateMatrix(input)).toStrictEqual(input);
  });

  test('Returns rotated matrix of 2x2', () => {
    const input = [[1, 2], [3, 4]];
    const output = [[1, 3], [2, 4]];

    expect(rotateMatrix(input)).toStrictEqual(output);
  });

});
