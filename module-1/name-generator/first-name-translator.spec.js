import translateFirstName from './first-name-translator';

describe('module-1/name-generator/first-name-translator', () => {
  it('translates my name', () => {
    const result = translateFirstName('Steve');

    expect(result).toEqual('Sassy');
  });

  it('translates Lila`s name', () => {
    const result = translateFirstName('Lila');

    expect(result).toEqual('Dancing');
  })
});
