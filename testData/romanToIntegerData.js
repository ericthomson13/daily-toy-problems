export const notString =[
  [[], 'invalid input'],
  [{}, 'invalid input'],
  [15, 'invalid input'],
  [false, 'invalid input'],
  [true, 'invalid input'],
  [new Set, 'invalid input'],
];

export const singleNumeral = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
];

export const multipleNumerals = [
  ['XV', 15],
  ['XVI', 16],
  ['MDC', 1600],
  ['MMM', 3000],
  ['MMMDCL', 3650],
  ['CL', 150],
  ['CLXVI', 166],
];

export const smallerNumeralBefore = [
  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['CM', 900],
  ['CD', 400],
  ['LM', 950],
  ['XC', 90],
];

export const notRomNumerals = [
  ['Q', 'invalid input'],
  ['Z', 'invalid input'],
  ['Y', 'invalid input'],
  ['MCLS', 'invalid input'],
  ['MXZ', 'invalid input'],
  ['MAC', 'invalid input'],
  ['MMME', 'invalid input'],
  ['EX', 'invalid input'],
];
