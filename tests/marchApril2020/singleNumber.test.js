import { singleNumberOne, singleNumberTwo } from '../../problems/marchApril2020/singleNumber';


// TODO: delve further into the randomization of numbers
  // Don't think that tests are written properly for checking random number that is out of range is the only single number

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
      const outOfRangeNum = Math.floor(Math.random() * 1000 + 200);
      const randomIndex = Math.floor(Math.random() * 200);
      input[randomIndex] = outOfRangeNum;
      expect(singleNumberOne(input)).toBe(outOfRangeNum);
    });
  }
});

describe('singleNumberTwo Testing', () => {

  test('Returns invalid input if string is input', () => {
    expect(singleNumberTwo('string')).toBe('invalid input');
  });

  test('Returns invalid input if number is input', () => {
    expect(singleNumberTwo(200)).toBe('invalid input');
  });

  test('Returns invalid input if Object is input', () => {
    expect(singleNumberTwo({ string: 'key', boolean: true })).toBe('invalid input');
  });

  test('Returns invalid input if boolean is input', () => {
    expect(singleNumberTwo(true)).toBe('invalid input');
  });

  test('Returns null if input array is empty', () => {
    expect(singleNumberTwo([])).toBe(null);
  });

  for (let j = 0; j < 20; j++) {
    test('Returns the value in the array that has only once instance', () => {
      const input = [];
      let randomVal;
      for (let i = 0; i < 100; i++) {
        randomVal = Math.floor((Math.random() * 100) + 1);
        input.push(randomVal);
        input.push(randomVal);
      }
      const outOfRangeNum = Math.floor((Math.random() * 1000) + 2000);
      const randomIndex = Math.floor((Math.random() * 200) + 200);
      input[randomIndex] = outOfRangeNum;
      expect(singleNumberTwo(input)).toEqual(outOfRangeNum)
    });
  }
});