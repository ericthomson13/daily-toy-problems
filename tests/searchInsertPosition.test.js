import searchInsertPosition from '../problems/searchInsertPosition';
import {
  invalidInputs,
  emptyArraysPos,
  emptyArraysNeg,
  negTargetPosArray,
  posTargetNegArray,
  returnAboveZero,
  indexTargetExists,
  indexTargetNonExist,
} from '../testsData/searchInsertPositionData';

describe('searchInsertPosition Tests', () => {

  test.each(invalidInputs)(`Returns 'invalid input' when either input is invalid`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(emptyArraysPos)(`Returns 0 as insert position when empty array with positive target`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(emptyArraysNeg)(`Returns 0 as insert position when empty array with negative target`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(negTargetPosArray)(`Returns 0 as insert position when array has only positive integers with negative target`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(posTargetNegArray)(`Returns the array length when array has only negative integers with positive target`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(returnAboveZero)(`Returns a value above 0 when array has positive integers and positive target greater than arr[0]`, (i) => {
    expect(searchInsertPosition(i[0], i[1])).toBeGreaterThan(0);
  });

  test.each(indexTargetExists)(`Returns the expected index when target is in array`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test.each(indexTargetNonExist)(`Returns the expected index when target is not in array`, (i, o) => {
    expect(searchInsertPosition(i[0], i[1])).toBe(o);
  });

  test(`Returns the expected index for target when input is larger array and in array`, () => {
    const input = [];
    for (let i = 0; i < 100; i++)  {
      input.push(i);
    }
    expect(searchInsertPosition(input, 40)).toBe(40);
  });
  test(`Returns the expected index for target when input is larger array and not in array`, () => {
    const input = [];
    for (let i = 0; i < 100; i++)  {
      input.push(i * 2);
    }
    expect(searchInsertPosition(input, 41)).toBe(21);
  });
});
