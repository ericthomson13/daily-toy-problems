/*

Code prompt found at:
https://leetcode.com/problems/add-to-array-form-of-integer/
Difficulty: Easy

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.



Example 1:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Example 4:
Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000

Example 5:
Input: A = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], K = 516
Output: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

Exmaple 6:
Input: A = [2,1,5], K = 806
Output: [1,0,2,1]

Example 7:
Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]

Example 8:
Input: A = [0], K = 23
Output: [2, 3]

Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0

*/

const addToArrayForm = (A, K) => {
  const kArr = K.toString().split('').map((n) => parseInt(n));
  const res = [];

  let carry = 0;
  let curK = kArr.length - 1;
  let curA = A.length - 1;

  let add;
  while (curK >= 0 || curA >= 0) {
    let intA = curA >= 0 ? A[curA] : 0;
    let intK = curK >= 0 ? kArr[curK] : 0;

    add = intA + intK + carry;

    if (add > 9) {
      add -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res.unshift(add);

    curA--;
    curK--;
  }

  if (carry) {
    res.unshift(carry);
  }

  return res;
}