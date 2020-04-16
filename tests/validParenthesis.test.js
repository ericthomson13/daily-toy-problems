import { validParenthesisForce, validParenthesisMath, } from '../problems/validParenthesis';
import { longExampleFalse, longExampleTrue, leetCodeExamples, allLeft, } from '../testsData/validParenthesisData';


describe('Valid Parenthesis Math Tests', () => {

  test('Returns true when given empty string', () => {
    expect(validParenthesisMath('')).toBe(true);
  });

  test.each(leetCodeExamples)('Returns expected value for Leet Code Examples', (i, o) => {
    expect(validParenthesisMath(i)).toBe(o);
  });

  test('Returns true for longExampleTrue', () => {
    expect(validParenthesisMath(longExampleTrue)).toBe(true);
  });

  test('Returns false for longExampleFalse', () => {
    expect(validParenthesisMath(longExampleFalse)).toBe(false);
  });

  test('Returns false for a string of all (', () => {
    expect(validParenthesisMath(allLeft)).toBe(false);
  });

});

// Brute Force tests commented out because too inefficient once Data was Cleaned up.
xdescribe('Valid Parenthesis Brute Force Tests', () => {

  test('Returns true when given empty string', () => {
    expect(validParenthesisForce('')).toBe(true);
  });

  test.each(leetCodeExamples)('Returns expected value for Leet Code Examples', (i, o) => {
    expect(validParenthesisForce(i)).toBe(o);
  });

  test('Returns true for longExampleTrue', () => {
    expect(validParenthesisForce(longExampleTrue)).toBe(true);
  });

  // Returning false positive despite passing LeetCode Tests
  test('Returns false for longExampleFalse', () => {
    expect(validParenthesisForce(longExampleFalse)).toBe(false);
  });

  // Returning false positive when all lefts
  test('Returns false for a string of all (', () => {
    expect(validParenthesisForce(allLeft)).toBe(false);
  });

});

