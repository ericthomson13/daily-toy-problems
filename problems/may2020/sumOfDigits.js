/*

Given a number n return the sum of the digits of the number n.

*/

const sumOfDigits = (num) => {
  if (num < 10) return num;
  return num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
};

export default sumOfDigits;
