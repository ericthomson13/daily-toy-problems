import isHappyNum from '../../problems/marchApril2020/isHappyNum';
import { happyNums, biggerHappyNums, } from '../../testsData/isHappyNumData';
import { notNumbers, } from '../../testsData/notTypeOfData';

describe('isHappyNum Tests', () => {

  test.each(notNumbers)(`Returns 'invalid input' when input is not a number`, (i) => {
    expect(isHappyNum(i)).toBe('invalid input');
  });

  test.each(happyNums)(`Returns true when a happy number between 1 and 100 is input`, (i) => {
    expect(isHappyNum(i)).toBe(true);
  });

  test.each(biggerHappyNums)(`Returns true when happy number over 100 is input`, (i) => {
    expect(isHappyNum(i)).toBe(true);
  });

  for (let i = 0; i < 100; i++) {
    if (happyNums.indexOf(i) === -1) {
      test(`Returns false when input is not a happy number`, () => {
        expect(isHappyNum(i)).toBe(false);
      });
    }
  }
});
