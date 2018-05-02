import getNextState from './get-next-state';

describe('module-3/get-next-state', () => {
  it('returns a 20x20 grid', () => {
    const result = getNextState();

    expect(result.length).toEqual(20);
    expect(result[0].length).toEqual(20);
  })
});