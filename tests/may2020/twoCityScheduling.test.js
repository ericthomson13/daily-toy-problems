import { twoCitySchedulingOne, twoCitySchedulingTwo, } from '../../problems/may2020/twoCityScheduling';

describe('Two City Scheduling Testing', () => {

  test('Returns expected sum for Leet Code Example 1', () => {
    const input = [[10,20],[30,200],[400,50],[30,20]];

    expect(twoCitySchedulingOne(input)).toBe(110);
  });

  test('Returns expected output', () => {
    const input = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];

    expect(twoCitySchedulingOne(input)).toBe(1859);
  });
});

describe('Two City Scheduling HigherOrder Functions Testing', () => {

  test('Returns expected sum for Leet Code Example 1', () => {
    const input = [[10,20],[30,200],[400,50],[30,20]];

    expect(twoCitySchedulingTwo(input)).toBe(110);
  });

  test('Returns expected output', () => {
    const input = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];

    expect(twoCitySchedulingTwo(input)).toBe(1859);
  });
});