import bubbleSort from '../../problems/marchApril2020/bubbleSort';

// TODO: figure out ways to test more options
  // look into how to test that BubbleSort functions differently based on other sort options
describe('bubbleSort Testing Suite', () => {
  let randomArray = [];
  beforeEach(() => {
    randomArray = [];
    for (let i = 0; i < 100; i++) {
      let random = Math.floor(Math.random() * 100);
      randomArray.push(random);
    }
  });
  test('Sorts the input array', () => {
    const defaultSort = [...randomArray].sort((a, b) => a < b ? -1 : 1);
    expect(bubbleSort(randomArray)).toStrictEqual(defaultSort);
  });
});
