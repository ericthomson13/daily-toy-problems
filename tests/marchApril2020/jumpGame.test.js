import { bruteForceJumpGame, canJumpDPBottom, } from '../../problems/marchApril2020/jumpGame';
import { leetCodeTest1, leetCodeTest2, leetCodeTest3, leetCodeTest4, leetCodeTest5, } from '../../testsData/jumpGameData';

describe('Brute Force Jump Game Tests', () => {
  // leetCodeTest1 not used because takes over 30s to run tests
  test.each([leetCodeTest2, leetCodeTest3, leetCodeTest4, leetCodeTest5])('returns expected value for leetcode examples', (i, o) => {
    expect(bruteForceJumpGame(i)).toBe(o);
  });
});


describe('DP Bottom First Jump Game Tests', () => {
  test.each([leetCodeTest1, leetCodeTest2, leetCodeTest3, leetCodeTest4, leetCodeTest5])('returns expected value for leetcode examples', (i, o) => {
    expect(canJumpDPBottom(i)).toBe(o);
  });
});
