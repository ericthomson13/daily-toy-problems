/*

Selection Sort

Similar to bubble sort but places small values into sorted position instead of large values
Takes finds minimum value and moves to the front

Not very time efficient but swaps in place so not very memory heavy
*/

const selectionSort = (arr) => {
  if (!arr.length) return arr;

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

export default selectionSort;
