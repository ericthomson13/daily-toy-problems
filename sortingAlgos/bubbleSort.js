const bubbleSort = (arr) => {
  if (!arr.length) return arr;

  let swapCounter = 1;
  let swapIndex = 0;

  const swap = (arr, i) => {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  };

  while(swapCounter > 0) {
    swapCounter = 0;

    for (let i = swapIndex; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        if (swapCounter === 0) {
          swapIndex = i - 1;
        }
        swapCounter++;
        swap(arr, i);
      }
    }
  }

  return arr;
};

export default bubbleSort;
