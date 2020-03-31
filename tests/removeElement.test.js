import { removeElementInPlace, removeElementNotInPlace, } from '../problems/removeElement';

describe('RemoveElementInPlace Tests', () => {

  test('It returns the expected length of an array where no nums were removed', () => {
    expect(removeElementInPlace([1, 2, 3, 4], 5)).toBe(4);
  });

  test('It returns the expected length of an array where there are duplicate numbers', () => {
    expect(removeElementInPlace([1, 1, 2, 3, 4], 4)).toBe(4);
  });

  test('It returns length of 0 when an empty array is input', () => {
    expect(removeElementInPlace([])).toBe(0);
  });

  test('It modifies the input array', () => {
    const nums = [ 1, 2, 3, 3, 4];
    removeElementInPlace(nums, 3);
    expect(nums).toStrictEqual([1, 2, 4]);
  });

});

describe('RemoveElementNotInPlace Tests', () => {

  test('It returns the expected length of an array where no nums were removed', () => {
    expect(removeElementNotInPlace([ 1, 2, 3, 4 ], 5)).toStrictEqual([ 1, 2, 3, 4 ]);
  });

  test('It returns the expected length of an array where there are duplicate numbers', () => {
    expect(removeElementNotInPlace([ 1, 1, 2, 3, 4] , 4)).toStrictEqual([ 1, 1, 2, 3 ]);
  });

  test('It returns length of 0 when an empty array is input', () => {
    expect(removeElementNotInPlace([], 1)).toStrictEqual([]);
  });

  test('It does not modify the input array', () => {
    const nums = [ 1, 2, 3, 3, 4];
    removeElementNotInPlace(nums, 3);
    expect(nums).toStrictEqual([ 1, 2, 3, 3, 4 ]);
  });

});

// Jest runs tests in parallel so unsure of how that affects running tests for time performance
// Need to investigate if better way to test time differences that is built in to Jest or other library

describe('Time Performance Comparisons for removeElement', () => {
  test('Expect time performance to be the same with small arrays', () => {
    const nums = [1, 2, 3, 4, 4];
    const startInPlace = new Date().getTime();
    removeElementInPlace([ ...nums ], 4);
    const endInPlace = new Date().getTime();
    const timeInPlace = endInPlace - startInPlace;

    const startNotPlace = new Date().getTime();
    removeElementNotInPlace([...nums], 4);
    const endNotPlace = new Date().getTime();
    const timeNotPlace = endNotPlace - startNotPlace;

    expect(timeInPlace === timeNotPlace).toBe(true);
  });


  test('Expect time NotInPlace to be more time performant with large (million items) Arrays', () => {
    const nums = [];
    for (let i = 0; i <= 1000000; i++) {
      let num = Math.floor(Math.random() * 11);
      nums.push(num);
    }
    const startInPlace = new Date().getTime();
    removeElementInPlace([ ...nums ], 4);
    const endInPlace = new Date().getTime();
    const timeInPlace = endInPlace - startInPlace;
    
    const startNotPlace = new Date().getTime();
    removeElementNotInPlace([...nums], 4);
    const endNotPlace = new Date().getTime();
    const timeNotPlace = endNotPlace - startNotPlace;
    console.log('time difference (s): ', ((timeInPlace - timeNotPlace) / 1000).toFixed(2));
    expect(timeInPlace > timeNotPlace).toBe(true);
  });

})