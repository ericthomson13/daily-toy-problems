import SinglyLinkedList from '../utilityDataStructures/singleLinkedList';

export const leetCodeExampleInput = new SinglyLinkedList();
const _leetCodeNodesInput = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < _leetCodeNodesInput.length; i++) {
  leetCodeExampleInput.push(_leetCodeNodesInput[i]);
}

export const leetCodeExampleOutput = new SinglyLinkedList();
const _leetCodeNodesOutput = [4, 5, 6];
for (let i = 0; i < _leetCodeNodesOutput.length; i++) {
  leetCodeExampleOutput.push(_leetCodeNodesOutput[i]);
};

export const singleNode = new SinglyLinkedList();
singleNode.push(1);

export const oddNumNodes = new SinglyLinkedList();
for (let i = 0; i < 9; i++) {
  oddNumNodes.push(i);
};

export const evenNumNodes = new SinglyLinkedList();
for (let i = 0; i < 10; i++) {
  evenNumNodes.push(i);
};

export const objectNotList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    }
  }
};

export const longList = new SinglyLinkedList();
for (let i = 0; i < 100; i++) {
  longList.push(i);
};

export const emptyList = new SinglyLinkedList();
