import insertionSort from '../sortingAlgos/insertionSort';


describe('Insertion Sort Tests', () => {

  test('Returns expected array for sorted input', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(insertionSort(input)).toStrictEqual(input);
  });

  test('Returns empty array when given empty array', () => {
    expect(insertionSort([])).toStrictEqual([]);
  });

  test('Returns expected array for short unsorted input', () => {
    const input = [1, 8, 9, 6, 7, 2, 3, 4 ,1, 2, 2, 9, 4, 3, 8, 9, 3, 4, 7, 8, 6];
    expect(insertionSort([...input])).toStrictEqual(input.sort((a, b) => a < b ? -1 : 1));
  });

  test('Returns expected array when given randomized input with length of 1000', () => {
    const input = [];
    for (let i = 0; i <= 1000; i++) {
      const random = Math.floor(Math.random() * 1000);
      input.push(random);
    }

    expect(insertionSort([...input])).toStrictEqual(input.sort((a, b) => a < b ? -1 : 1));
  });

  test('Returns expected array when given randomized input with length of 10,000', () => {
    const input = [];
    for (let i = 0; i <= 10000; i++) {
      const random = Math.floor(Math.random() * 10000);
      input.push(random);
    }

    expect(insertionSort([...input])).toStrictEqual(input.sort((a, b) => a < b ? -1 : 1));
  });
});

