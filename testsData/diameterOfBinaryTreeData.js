import BinarySearchTree from '../utilityDataStructures/binarySearchTree';

export const emptyTree = new BinarySearchTree();

export const smallTree = new BinarySearchTree();
smallTree.insert(5);
smallTree.insert(3);
smallTree.insert(6);

export const largerTree = new BinarySearchTree();
largerTree.insert(5);
largerTree.insert(3);
largerTree.insert(6);
largerTree.insert(2);
largerTree.insert(4);
largerTree.insert(8);
largerTree.insert(9);
