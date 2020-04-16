export const leetCodeExamples = [
  [')(', false],
  ['(*)', true],
  ['(*))', true],
  ['', true],
  ['()', true],
  ['((*)', true],
];

export const longExampleTrue = '';

for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 10);
  if (random > 5) {
    '(' + longExampleTrue;
    longExampleTrue + ')';
  } else {
    longExampleTrue + '*';
  }
}

export const longExampleFalse ='';

// Below could throw a false negative in the very unlikely event all randoms are between 6 and 10
for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 10);
  if (random > 5) {
    longExampleFalse + '(';
  } else {
    longExampleFalse + '()';
  }
}

