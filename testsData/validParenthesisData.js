export const leetCodeExamples = [
  [')(', false],
  ['(*)', true],
  ['(*))', true],
  ['', true],
  ['()', true],
  ['((*)', true],
];

export const longExampleTrue = '(((((((((((((((((((((((((((((((((((((((((*)*)**)*))********))***)**)*)****)*)*)**)**))***))))))*)*)*)****)*****)))*))**))*)****)**)))****)*))';

export const longExampleFalse = '(((()()(((((()()(()()(()()()()(()()()(()()()((((()((()(()()()(()()(()()()((()()()()(()((()(()(((((()()()((()(()()((()()()()((((()((()()(((()()()(()(()';

export const allLeft = [];
for (let i = 0; i < 100; i++) {
  allLeft.push('(');
}

allLeft.join('');
