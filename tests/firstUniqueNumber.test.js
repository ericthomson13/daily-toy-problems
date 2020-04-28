import FirstUnique from '../problems/firstUniqueNumber';

describe('First Unique Number Leet Code Example 1 Tests', () => {
  const newUnique = new FirstUnique([2,3,5]);

  test('Returns expected value for LeetCode Example 1 Step 1', () => {
    expect(newUnique.showFirstUnique()).toBe(2);
  });


  test('Returns expected value for LeetCode Example 1 Step 2', () => {
    newUnique.add(5);
    expect(newUnique.showFirstUnique()).toBe(2);
  });

  test('Returns expected value for LeetCode Example 1 Step 3', () => {
    newUnique.add(2);
    expect(newUnique.showFirstUnique()).toBe(3);
  });

  test('Returns expected value for LeetCode Example 1 Step 4', () => {
    newUnique.add(3);
    expect(newUnique.showFirstUnique()).toBe(-1);
  });
});

describe('First Unique Number Leet Code Example 2', () => {
  const newUnique = new FirstUnique([7,7,7,7,7,7]);

  test('Returns expected for Leet Code Example 2 Step 1', () => {
    expect(newUnique.showFirstUnique()).toBe(-1);
  });

  test('Returns expected for Leet Code Example 2 Step 2', () => {
    newUnique.add(7);
    expect(newUnique.showFirstUnique()).toBe(-1);
  });

  test('Returns expected for Leet Code Example 2 Step 3', () => {
    newUnique.add(3);
    expect(newUnique.showFirstUnique()).toBe(3);
  });

  test('Returns expected for Leet Code Example 2 Step 4', () => {
    newUnique.add(3);
    expect(newUnique.showFirstUnique()).toBe(-1);
  });

  test('Reutnrs expected for Leet Code Example 2 Step 5', () => {
    newUnique.add(7);
    expect(newUnique.showFirstUnique()).toBe(-1);
  });

  test('Returns expected for Leet Code Example 2 Step 6', () => {
    newUnique.add(17);
    expect(newUnique.showFirstUnique()).toBe(17);
  });
});

describe('First Unique Number Leet Code Example 3', () => {
  const newUnique = new FirstUnique([809]);
  test('Returns expected for Leet Code Example 3 Step 1', () => {
    expect(newUnique.showFirstUnique()).toBe(809);
  });

  test('Returns expected for Leet Code Example 3 Step 2', () => {
    newUnique.add(809);
    expect(newUnique.showFirstUnique()).toBe(-1);
  });
});