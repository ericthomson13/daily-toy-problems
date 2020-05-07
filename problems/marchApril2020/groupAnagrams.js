/*

Group Anagrams

Code prompt found at:
https://leetcode.com/problems/group-anagrams/
Difficulty: Medium

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

// this solution is not very fast, only faster than 10% of JS submissions

const groupAnagrams = (strs) => {
  if (!Array.isArray(strs)) return 'invalid input';
  if (strs.length === 0) return [];
  const anaObj = {};
  strs.forEach((str) => {
    let sortedStr = str.split('').sort().join();
    if (anaObj[sortedStr]) {
      anaObj[sortedStr].push(str);
    } else {
      anaObj[sortedStr] = [str];
    }
  });
  return Object.values(anaObj);
};

export default groupAnagrams;
