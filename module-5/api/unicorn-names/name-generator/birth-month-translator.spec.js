import translateBirthMonth from './birth-month-translator';

describe('module-1/name-generator/birth-month-translator', () => {
  it('translates my birth month', () => {
    const result = translateBirthMonth('January');

    expect(result).toEqual('Tamer of');
  });

  it('translates May', () => {
    const result = translateBirthMonth('May');

    expect(result).toEqual('Face of');
  })
});
