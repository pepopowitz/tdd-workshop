import generateName from './generate-name';

describe('module-1/generate-name', () => {
  it('works', () => {
    const result = generateName(1);
    
    expect(result).toEqual('a');
  })
});