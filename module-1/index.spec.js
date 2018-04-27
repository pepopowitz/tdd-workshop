import fn from './index';

describe('module-2/index', () => {
  it('works', () => {
    const result = fn(1);
    
    expect(result).toEqual('a');
  })
});