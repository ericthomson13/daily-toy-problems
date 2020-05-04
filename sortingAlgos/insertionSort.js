/*

Insertion Sort

This builds up the sort by gradually creating a left portion that is always sorted

Take each element and places it where it should go in the sorted portion of the array

Big O is quadratic

Works well with nearly sorted data and data that may be streamed or live
*/

const insertionSort = (arr) => {
  if (!arr.length) return arr;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // will break if found insert position via &&
    for (j; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
};

export default insertionSort;
