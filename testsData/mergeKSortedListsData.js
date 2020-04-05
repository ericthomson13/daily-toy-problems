import SinglyLinkedList from '../utilityDataStructures/singleLinkedList';

const _l1LeetCodeTest = new SinglyLinkedList();
_l1LeetCodeTest.push(1);
_l1LeetCodeTest.push(4);
_l1LeetCodeTest.push(5);

const _l2LeetCodeTest = new SinglyLinkedList();
_l2LeetCodeTest.push(1);
_l2LeetCodeTest.push(3);
_l2LeetCodeTest.push(4);

const _l3LeetCodeTest = new SinglyLinkedList();
_l3LeetCodeTest.push(2);
_l3LeetCodeTest.push(6);

export const leetCodeTestCase = [
  _l1LeetCodeTest,
  _l2LeetCodeTest,
  _l3LeetCodeTest,
];

const _leetTestCaseValues = [1, 1, 2, 3, 4, 4, 5, 6];

export const leetCodeSolutionCase = new SinglyLinkedList();
for (let i = 0; i < _leetTestCaseValues.length; i++) {
  leetCodeSolutionCase.push(_leetTestCaseValues[i]);
};

const _firstTestCaseValues = [1, 2, 3, 4, 5];
const _firstTestCase1 = new SinglyLinkedList();
const _firstTestCase2 = new SinglyLinkedList();

for (let i = 0; i < _firstTestCaseValues.length; i++) {
  _firstTestCase1.push(_firstTestCaseValues[i]);
  _firstTestCase2.push(_firstTestCaseValues[i]);
};

export const firstTestSolution = new SinglyLinkedList();

for (let i = 0; i < _firstTestCaseValues.length; i++) {
  firstTestSolution.push(_firstTestCaseValues[i]);
  firstTestSolution.push(_firstTestCaseValues[i]);
};

export const firstTestCase = [
  _firstTestCase1,
  _firstTestCase2,
];

// removed below because causing heap memory allocation overflow
// const _longerTestCase1 = new SinglyLinkedList();
// const _longerTestCase2 = new SinglyLinkedList();
// export const longerTestSolution = new SinglyLinkedList();

// for (let i = 0; i < 25; i + 2) {
//   _longerTestCase1.push(i);
//   _longerTestCase2.push(i + 1);
//   longerTestSolution.push(i);
//   longerTestSolution.push(i + 1);
// };

// export const longerTestCase = [
//   _longerTestCase1,
//   _longerTestCase2,
// ];
