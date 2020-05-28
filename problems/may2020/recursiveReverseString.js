/*

Write a recursive function that, given a string s, returns the characters in reverse order.

*/

const recRevString = (string) => {
  const arr = string.split('');
  let str = '';

  const reverse = (array) => {
    if (!array.length) return;
    str += array[array.length - 1];
    array.pop();
    reverse(array);
  }

  reverse(arr);

  return str;
};

export default recRevString;
