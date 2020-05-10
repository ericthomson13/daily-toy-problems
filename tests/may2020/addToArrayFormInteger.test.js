import addToArrayForm from '../../problems/may2020/addToArrayFormInteger';

const testData = [
  [[[1,2,0,0], 34], [1,2,3,4]],
  [[[2,7,4], 181], [4,5,5]],
  [[[2,1,5], 806], [1,0,2,1]],
  [[[9,9,9,9,9,9,9,9,9,9], 1],[1,0,0,0,0,0,0,0,0,0,0]],
  [[[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516], [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]],
  [[[2,1,5], 806], [1,0,2,1]],
  [[[0], 23], [2, 3]],
]
describe('Add to Array Form Integer Tests', () => {

  test.each(testData)('Returns expected output for all inputs', (i, o)  => {
    expect(addToArrayForm(i[0], i[1])).toStrictEqual(o);
  });
});
