/*

Code prompt found at:
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
Difficulty: 8kyu

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

const abbrevName = (name) => {
  let names = name.toUpperCase().split(' ');
  let letters = [];

  for (let i = 0; i < names.length; i++) {
    letters.push(names[i][0]);
  }

  return letters.join('.');
};

export default abbrevName;
