import numberOfIslands from '../../problems/marchApril2020/numberOfIslands';
import { leetCodeGrid1, leetCodeGrid2, emptyArray, } from '../../testsData/numberOfIslandsData';
import numIslands from '../../problems/marchApril2020/numberOfIslands';

xdescribe('Number of Islands Tests', () => {

  test('Returns expected output for Leet Code Example 1', () => {
    expect(numberOfIslands(leetCodeGrid1)).toBe(1);
  });

  test('Returns expected output for Leet Code Example 2', () => {
    expect(numberOfIslands(leetCodeGrid2)).toBe(3);
  });

  test('Returns 0 with empty array', () => {
    expect(numberOfIslands(emptyArray)).toBe(0);
  });
})