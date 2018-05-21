import translateMiddleName from './middle-name-translator';

describe('module-1/name-generator/middle-name-translator', () => {
  it('translates my middle name', () => {
    const result = translateMiddleName('Joshua');

    expect(result).toEqual('Crystal');
  })

  it('translates Olivia`s middle name', () => {
    const result = translateMiddleName('Marie');

    expect(result).toEqual('Prince');
  })
});
