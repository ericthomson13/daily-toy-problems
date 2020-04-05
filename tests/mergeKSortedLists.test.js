import mergeKSortedLists from '../problems/mergeKSortedLists';

import {
  leetCodeTestCase,
  leetCodeSolutionCase,
  firstTestSolution,
  firstTestCase,
  longerTestCase,
  longerTestSolution,
} from '../testsData/mergeKSortedListsData';
import { notArray } from '../testsData/notTypeOfData';


// TODO: figure out Javascript heap size issue with larger lists

describe('mergeKSortedLists Tests', () => {

  test.each(notArray)(`Returns 'invalid input' when input is not Array`, (i) => {
    expect(mergeKSortedLists(i)).toBe('invalid input');
  });

  test('Returns null when input is empty array', () => {
    expect(mergeKSortedLists([])).toBe(null);
  });

  test('Returns expected output when using LeetCode Example Test Case', () => {
    expect(mergeKSortedLists(leetCodeTestCase)).toStrictEqual(leetCodeSolutionCase);
  });

  // below only works with 2 lists anything more and it returns 1 less per list above 2
    // think that this has something to do with same issues as below
  test('Returns expected output when using another example test', () => {
    expect(mergeKSortedLists(firstTestCase)).toStrictEqual(firstTestSolution);
  });

  // removed because causing heap out of memory issues with construction of data
  xtest('Returns expected output with longer lists (50 per list)', () => {
    expect(mergeKSortedLists(longerTestCase)).toStrictEqual(longerTestSolution);
  });

});
