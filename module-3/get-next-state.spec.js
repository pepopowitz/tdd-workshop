import getNextState from './get-next-state';

describe('module-3/get-next-state', () => {
  it('works', () => {
    const result = getNextState(1);
    
    expect(result.length).toEqual(5);
  })
});