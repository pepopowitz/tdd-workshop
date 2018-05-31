import translateLastName from './last-name-translator';

describe('module-1/name-generator/last-name-translator', () => {
  it('translates my last name', () => {
    const result = translateLastName('Hicks');

    expect(result).toEqual('Briar');
  });

  it('translates my cat`s last name', () => {
    const result = translateLastName('Turtle');

    expect(result).toEqual('Darkness');
  });

  it('supports lowercase', () => {
    const result = translateLastName('turtle');

    expect(result).toEqual('Darkness');
  });
});
