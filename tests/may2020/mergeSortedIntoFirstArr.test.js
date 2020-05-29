import merge from '../../problems/may2020/mergeSortedIntoFirstArr';

describe('Merge Sorted Arrays Into First Array', () => {

  test('First array is not modified when no length to second array', () => {
    const nums1 = [1, 3, 4, 4, 6];
    const m = nums1.length;
    const nums2 = [];
    const n = 0;

    merge(nums1, m, nums2, n);

    expect(nums1).toStrictEqual(nums1);
  });

  test('Modifies first array as expected for Leet Code Example 1', () => {
    const nums1 = [1,2,3,0,0,0];
    const m = 3;
    const nums2 = [2,5,6];
    const n = 3;
    const output = [1,2,2,3,5,6];

    merge(nums1, m, nums2, n);

    expect(nums1).toStrictEqual(output);
  });

  test('Modifies first array as expected for example', () => {
    const nums1 = [1, 3, 3, 4, 5, 6, 9, 0, 0, 0, 0, 0];
    const m = 7;
    const nums2 = [1, 2, 3, 4, 5];
    const n = 5;
    const output = [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 9];

    merge(nums1, m, nums2, n);

    expect(nums1).toStrictEqual(output);

  })
})