import bubbleSort from '../problems/bubbleSort';

describe('bubbleSort Testing Suite', () => {
  let randomArray = [];
  beforeEach(() => {
    randomArray = [];
    for (let i = 0; i < 100; i++) {
      let random = Math.floor(Math.random() * 100);
      randomArray.push(random);
    }
  });
  // check that sorts values
  test('Sorts the input array', () => {
    const defaultSort = [...randomArray].sort((a, b) => a < b ? -1 : 1);
    expect(bubbleSort(randomArray)).toStrictEqual(defaultSort);
  });
});
