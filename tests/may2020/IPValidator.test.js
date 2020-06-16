import isValidIP from '../../problems/may2020/IPValidator';

describe('IP Validator Tests', () => {

  test('Returns Neither when input leads with a 0', () => {
    const input = '0.123.235.234';

    expect(isValidIP(input)).toBe('Neither');
  });

  test('Returns Neither for invalid IPv6 input', () => {
    const input = '20EE:FGb8:85a3:0:0:8A2E:0370:7334';

    expect(isValidIP(input)).toBe('Neither');
  });

  test('Returns Neither for invalid IPv6 input', () => {
    const input = '2001:0db8:85a3:00000:0:8A2E:0370:7334';

    expect(isValidIP(input)).toBe('Neither');
  });

  test('Returns Neither for invalid IPv4 input', () => {
    const input = '1e1.4.5.6';

    expect(isValidIP(input)).toBe('Neither');
  });

  test('Returns IPv6 for valid IPv6 input', () => {
    const input = '2001:0db8:85a3:0:0:8A2E:0370:7334';

    expect(isValidIP(input)).toBe('IPv6');
  });

  test('Returns IPv4 for valid IPv4 input', () => {
    const input = '172.16.254.1';

    expect(isValidIP(input)).toBe('IPv4');
  });

  test('Returns Neither when IPv4 is above 255', () => {
    const input = '256.256.256.256';

    expect(isValidIP(input)).toBe('Neither');
  });
});
