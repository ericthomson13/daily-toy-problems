/*

Write a recursive implementation of a factorial function.

*/

const recursiveFactorial = (num) => {
  if (num <= 1) return num;

  let result = 1;

  const loop = (n) => {
    if (n <= 1) return;
    result *= n;
    loop(n - 1);
  }

  loop(num);

  return result;
};

export default recursiveFactorial;
