import bubbleSort from '../sortingAlgos/bubbleSort';

describe('Bubble Sort Tests', () => {
  test('Returns expected array for sorted input', () => {
    const input = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
    expect(bubbleSort(input)).toStrictEqual(input);
  });
});
