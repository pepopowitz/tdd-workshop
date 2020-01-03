// This is where you'll be writing tests!

import getNextState from './get-next-state';

describe('module-5/get-next-state', () => {
  it('throws null argument if grid is undefined', () => {
    expect(() => {
      const result = getNextState(undefined);
    }).toThrow('argument null');
  });

  it('returns a grid of the same size', () => {
    const initialState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    const result = getNextState(initialState);

    // The result should have 3 rows
    expect(result).toHaveLength(3);

    // Each row should have 3 columns
    expect(result[0]).toHaveLength(3);
  });

  // Write some more tests here!!!!
});
