import minStack from '../problems/minStack';

export const leetCodeExample1 = new minStack();

leetCodeExample1.push(-2);
leetCodeExample1.push(0);
leetCodeExample1.push(-3);

export const leetCodeExample2 = new minStack();

leetCodeExample2.push(-2);
leetCodeExample2.push(0);
leetCodeExample2.push(-3);
leetCodeExample2.pop();

export const longerExample = new minStack();
for (let i = 0; i < 100; i++) {
  i % 2 === 0 ? longerExample.push(i) : longerExample.push(-i);
}

export const multipleVals = new minStack();
  multipleVals.push(-1);
  multipleVals.push(0);
  multipleVals.push(1);

export const oneVal = new minStack();
  oneVal.push(1);

export const allNeg = new minStack();
allNeg.push(-100);
for (let i = -100; i < 0; i++) {
  let randomNeg = - Math.ceil(Math.random() * 100);
  allNeg.push(randomNeg);
};

export const allPos = new minStack();
allPos.push(1)
for (let i = 1; i < 100; i++) {
  let randomPos = Math.ceil(Math.random() * 100);
  allPos.push(randomPos);
}