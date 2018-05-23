// SOLUTION! (whole file)

import fizzBuzz from './index';

describe('fizzBuzz', () => {
  it('exists', () => {
    const type = typeof fizzBuzz;

    expect(type).toEqual('function');
  });

  describe('input validation', () => {
    it('throws error if non-numeric', () => {
      expect(() => fizzBuzz('asdf'))
        .toThrowError('invalid argument: value');
    });

    it('throws error if numeric but non-integer', () => {
      expect(() => fizzBuzz(1.4))
        .toThrowError('invalid argument: value');
    });

    it('throws error if less than 1', () => {
      expect(() => fizzBuzz(0))
        .toThrowError('argument out of range: value');
    });

    it('throws error if greater than 100', () => {
      expect(() => fizzBuzz(101))
        .toThrowError('argument out of range: value');
    });
  });

  // COMMENTED OUT when it no longer made sense
  // it('returns a string with all integers from 1 to 15 when input=15', () => {
  //   const result = fizzBuzz(15);

  //   expect(result).toEqual('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
  // })

  // COMMENTED OUT when it no longer made sense
  // it('returns the correct string when input=15', () => {
  //   const result = fizzBuzz(15);

  //   expect(result).toEqual('1 2 Fizz 4 5 Fizz 7 8 Fizz 10 11 Fizz 13 14 Fizz');
  // })

  it('returns the correct string when input=15', () => {
    const result = fizzBuzz(14);

    expect(result).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14');
  })

  it('returns the correct string when input=15', () => {
    const result = fizzBuzz(15);

    expect(result).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz');
  })
});
