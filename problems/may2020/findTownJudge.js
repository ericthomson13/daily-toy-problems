/*


*/

const findJudge = (N, trust) => {
  const judge = new Array(N + 1).fill(0);

  for (let [num, trusts] of trust) {
    judge[num]--;
    judge[trusts]++;
  }

  for (let i = 1; i <= N; i++) {
    if (judge[i] === N - 1) return i;
  }

  return -1;
};

export default findJudge;
