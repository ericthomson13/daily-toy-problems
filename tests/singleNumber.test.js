import { singleNumberOne, singleNumberTwo } from '../problems/singleNumber';

describe('singleNumberOne Testing', () => {
  test('Returns invalid input if string is input', () => {
    expect(singleNumberOne('string')).toBe('invalid input');
  });
  
  test('Returns invalid input if number is input', () => {
    expect(singleNumberOne(200)).toBe('invalid input');
  });

  test('Returns invalid input if Object is input', () => {
    expect(singleNumberOne({ string: 'key', boolean: true })).toBe('invalid input');
  });

  test('Returns invalid input if boolean is input', () => {
    expect(singleNumberOne(true)).toBe('invalid input');
  });

  test('Returns null if input array is empty', () => {
    expect(singleNumberOne([])).toBe(null);
  });
  
  for (let j = 0; j < 20; j++) {
    test('Returns the value in the array that has only once instance', () => {
      const input = [];
      for (let i = 0; i < 100; i++) {
        input.push(i);
        input.push(i);
      }
      const outOfRangeNum = Math.floor(Math.random() * 1000 + 100);
      const randomIndex = Math.floor(Math.random() * 200);
      input[randomIndex] = outOfRangeNum;
      expect(singleNumberOne(input)).toBe(outOfRangeNum);
    });
  }
});