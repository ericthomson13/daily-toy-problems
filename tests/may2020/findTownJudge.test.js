import findJudge from '../../problems/may2020/findTownJudge';

const examples = [
  [[2, [[1,2]]], 2],
  [[3, [[1,3],[2,3]]], 3],
  [[3, [[1,3],[2,3],[3,1]]], -1],
  [[3, [[1,2],[2,3]]], -1],
  [[4, [[1,3],[1,4],[2,3],[2,4],[4,3]]], 3]
];

describe('Find Town Judge Test', () => {

  test.each(examples)('Returns expected output for each Leet Code Example', (i, o) => {
    expect(findJudge(i[0], i[1])).toBe(o);
  });
});
