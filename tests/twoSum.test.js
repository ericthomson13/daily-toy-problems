import { twoSum, twoSumO1, } from '../problems/twoSum';

describe('twoSum Baseline Tests', () => {
  test('Returns invalid when an array with length 0 is input', () => {
    expect(twoSum([], 9)).toBe('invalid nums input');
  });

  test('Returns the appropriate value in the 0 index of the tuple', () => {
    expect(twoSum([2, 7, 11, 15], 9)[0]).toBe(0);
  });

  test('Returns the appropriate value in the 1 index of the tuple', () => {
    expect(twoSum([2, 7, 11, 15], 9)[1]).toBe(1);
  });

  test('Returns invalid target when target is not a number', () => {
    expect(twoSum([2, 7, 11, 15], 'a')).toBe('target value invalid');
  });

  test('Returns the correct value when the target is in the final number', () => {
    const input = [];
    for (let i = 0; i < 2000; i++) {
      input.push(i);
    }
    input.push(2001);
    expect(twoSum(input, 2006)).toStrictEqual([5, 2000]);
  });

  test('Returns the correct values when the target is the final 2 numbers', () => {
    const input = [];
    for (let i = 0; i < 2000; i++) {
      input.push(i);
    };
    input.push(2000);
    input.push(2001);
    expect(twoSum(input, 4001)).toStrictEqual([input.length - 2, input.length -1]);
  });

  test('Returns the correct values when the target is towards the end with large inputs and targets', () => {
    const input = [];
    let i = 0;
    for (i; i < 20000; i++) {
      input.push(i);
    };
    input.push(i + 1);
    input.push(i + 2);
    expect(twoSum(input, i * 2 + 3)).toStrictEqual([input.length - 2, input.length - 1]);
  });

});


describe('twoSumO1 Tests', () => {
  test('Returns invalid when an array with length 0 is input', () => {
    expect(twoSumO1([], 9)).toBe('invalid nums input');
  });

  test('Returns the appropriate value in the 0 index of the tuple', () => {
    expect(twoSumO1([2, 7, 11, 15], 9)[0]).toBe(0);
  });

  test('Returns the appropriate value in the 1 index of the tuple', () => {
    expect(twoSumO1([2, 7, 11, 15], 9)[1]).toBe(1);
  });

  test('Returns invalid target when target is not a number', () => {
    expect(twoSumO1([2, 7, 11, 15], 'a')).toBe('target value invalid');
  });

  test('Returns the correct value when the target is in the final number', () => {
    const input = [];
    for (let i = 0; i < 2000; i++) {
      input.push(i);
    }
    input.push(2001);
    expect(twoSumO1(input, 2006)).toStrictEqual([1002, 1004]);
  });

  test('Returns the correct values when the target is the final 2 numbers', () => {
    const input = [];
    for (let i = 0; i < 2000; i++) {
      input.push(i);
    };
    input.push(2000);
    input.push(2001);
    expect(twoSumO1(input, 4001)).toStrictEqual([input.length - 2, input.length -1]);
  });

  test('Returns the correct values when the target is towards the end with large inputs and targets', () => {
    const input = [];
    let i = 0;
    for (i; i < 20000; i++) {
      input.push(i);
    };
    input.push(i + 1);
    input.push(i + 2);
    expect(twoSumO1(input, i * 2 + 3)).toStrictEqual([input.length - 2, input.length - 1]);
  });
});

describe('Testing time performance with large arrays expect twoSumO1 to be faster', () => {
  const arr = [];
  for ( let i = 0; i < 2000; i++) {
    arr.push(i);
  };
  arr.push(20001);
  arr.push(20001);
  const t1N = new Date().getTime();
  twoSum(arr,40002);
  const t2N = new Date().getTime();
  const tN = t2N - t1N;
  const t1O = new Date().getTime();
  twoSumO1(arr, 40002);
  const t2O = new Date().getTime();
  const tO = t2O - t1O;
  expect(tN).toBeGreaterThan(tO);
});