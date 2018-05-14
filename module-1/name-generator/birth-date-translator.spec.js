import translateBirthDate from './birth-date-translator';

describe('module-1/name-generator/birth-date-translator', () => {
  it('translates my birth date', () => {
    const result = translateBirthDate(26);

    expect(result).toEqual('IIFEs');
  });

  it('translates the 1st', () => {
    const result = translateBirthDate(1);

    expect(result).toEqual('Associative Arrays');
  });
});
