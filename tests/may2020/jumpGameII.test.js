import jumpGameII from '../../problems/may2020/jumpGameII';

describe('Jump Game II Tests', () => {

  test('Gives expected output for Leet Code Example', () => {
    const input = [2,3,1,1,4];
    expect(jumpGameII(input)).toBe(2);
  });

  test('Gives expected output for longer input', () => {
    const input = [
      8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5
    ];
    expect(jumpGameII(input)).toBe(13);
  });

  test('Gives expected output for input', () => {
    const input =  [2,3,1,1,4];
    expect(jumpGameII(input)).toBe(2);
  });

  test('Gives expected output for short input', () => {
    const input = [2, 0];
    expect(jumpGameII(input)).toBe(1);
  });

  test('Gives expected output for input', () => {
    const input = [1,1,2,2,0,1,1];
    expect(jumpGameII(input)).toBe(5);
  });
});