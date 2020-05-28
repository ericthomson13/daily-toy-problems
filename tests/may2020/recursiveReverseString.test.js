import recRevString from '../../problems/may2020/recursiveReverseString';

describe('Recursive Reverse String Tests', () => {

  test('Returns letter when only one letter input', () => {
    expect(recRevString('s')).toBe('s');
  });

  test('Returns reversed string with length of 2', () => {
    expect(recRevString('st')).toBe('ts');
  });

  test('Returns the reversed string', () => {
    expect(recRevString('string')).toBe('gnirts');
  });

  test('Returns the reversed string', () => {
    expect(recRevString('glass')).toBe('ssalg');
  });

  test('Returns the reversed string', () => {
    expect(recRevString('funny')).toBe('ynnuf');
  });

  test('Returns the reversed string', () => {
    expect(recRevString('something')).toBe('gnihtemos');
  });

  test('Returns the reversed string', () => {
    expect(recRevString('monumental')).toBe('latnemunom');
  });
});