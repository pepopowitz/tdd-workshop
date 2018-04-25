import fn from './index';

describe('module-1/index', () => {
  it('works', () => {
    const result = fn(1);
    
    expect(result).toEqual(1);
  })
});