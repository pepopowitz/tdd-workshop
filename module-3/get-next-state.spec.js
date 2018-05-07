import getNextState from './get-next-state';

describe('module-3/get-next-state', () => {
  it('returns a 40x40 grid', () => {
    const result = getNextState();

    expect(result.length).toEqual(40);
    expect(result[0].length).toEqual(40);
  })
});