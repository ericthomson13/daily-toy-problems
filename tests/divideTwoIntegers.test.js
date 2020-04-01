import { divideBit, }  from '../problems/divideTwoIntegers';

describe('Bit Divide Two Integers Tests', () => {

  test('Returns undefinted when dividend is 0', () => {
    expect(divideBit(0, 1)).toBe(undefined);
  });

  test('Returns undefined when divisor is 0', () => {
    expect(divideBit(10, 0)).toBe(undefined);
  });

  test('Returns Invalid Input When Greater Than 32-bit Number', () => {
    expect(divideBit(21474836480, 1)).toBe('Invalid Input Integer Larger than 32-bit');
  });

  test('Returns Invalid Input When Greater Than 32-bit Number', () => {
    expect(divideBit(1231, 21474836480)).toBe('Invalid Input Integer Larger than 32-bit');
  });

  test('Returns 2147483647 When Dividend Is -2147483648 and Divisor Is -1', () => {
    expect(divideBit(-2147483648, -1)).toBe(2147483647);
  });
  
  test('Returns -2147483648 When Dividend Is -2147483648 and Divisor is 1', () => {
    expect(divideBit(-2147483648, 1)).toBe(-2147483648);
  });
  
  // Both Inputs Positive
  for (let i = 0; i < 10; i++) {
    const randomDividend = Math.floor(Math.random() * 100) + 10;
    const randomDivisor = Math.floor(Math.random() * 10);
    const expected = Math.floor(randomDividend / randomDivisor);
    if ( expected !== Infinity) {
      test('Returns the Correct Value When Inputs Are Valid and Not Edge Cases', () => {
        expect(divideBit(randomDividend, randomDivisor)).toBe(expected);
      });
    }
  }

  // Negative Dividend and Positive Divisor
  for (let i = 0; i < 10; i++) {
    const randomDividend = -(Math.floor(Math.random() * 100) + 10);
    const randomDivisor = Math.floor(Math.random() * 10);
    const expected = Math.ceil(randomDividend / randomDivisor);
    if ( expected !== Infinity && !-Infinity) {
      test('Returns the Correct Value When Inputs Are Valid and Not Edge Cases', () => {
        expect(divideBit(randomDividend, randomDivisor)).toBe(expected);
      });
    }
  }

  // Both Inputs Negative
  for (let i = 0; i < 10; i++) {
    const randomDividend = -(Math.floor(Math.random() * 100) + 10);
    const randomDivisor = -(Math.floor(Math.random() * 10));
    const expected = Math.floor(randomDividend / randomDivisor);
    if ( expected !== Infinity) {
      test('Returns the Correct Value When Inputs Are Valid and Not Edge Cases', () => {
        expect(divideBit(randomDividend, randomDivisor)).toBe(expected);
      });
    }
  }

  // Positive Dividend and Negative Divisor
  for (let i = 0; i < 10; i++) {
    const randomDividend = Math.floor(Math.random() * 100) + 10;
    const randomDivisor = -(Math.floor(Math.random() * 10));
    const expected = Math.floor(randomDividend / randomDivisor);
    if ( expected !== Infinity && !-Infinity) {
      test('Returns the Correct Value When Inputs Are Valid and Not Edge Cases', () => {
        expect(divideBit(randomDividend, randomDivisor)).toBe(expected);
      });
    }
  }
});
