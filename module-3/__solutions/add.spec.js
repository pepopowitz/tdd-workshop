// SOLUTION! (whole file)

import add from './add';

describe('module-3/add', () => {
  it('exists', () => {
    const type = typeof add;

    expect(type).toEqual('function');
  });

  it('returns 0 for empty string', () => {
    const result = add('');

    expect(result).toEqual(0);
  });

  it('returns the number for a string of one number', () => {
    const result = add('4');

    expect(result).toEqual(4);
  });

  it('returns the sum for a string with two numbers', () => {
    const result = add('4,5');

    expect(result).toEqual(9);
  });

  it('returns the sum for a string with n numbers', () => {
    const result = add('1,4,5,14,6');

    expect(result).toEqual(30);
  });

  it('allows combination of , and new line delimiters', () => {
    const result = add('1\n3,5');

    expect(result).toEqual(9);
  });

  it('allows delimiter specification', () => {
    const result = add('//%\n1%6%10');

    expect(result).toEqual(17);
  });

  it('throws for a  negative number', () => {
    const input = '4,-5';

    expect(() => {
      add(input);
    }).toThrowError('Negatives not allowed: -5');
  });

  it('throws for multiple negatives', () => {
    const input = '4,-5,-10';

    expect(() => {
      add(input);
    }).toThrowError('Negatives not allowed: -5, -10');
  });
});