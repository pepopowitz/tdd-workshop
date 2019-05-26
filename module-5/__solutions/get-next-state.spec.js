// SOLUTION! (whole file)

import getNextState from './get-next-state';

describe('module-5/get-next-state', () => {
  it('throws null argument if grid is undefined', () => {
    expect(() => {
      const result = getNextState(undefined);
    }).toThrow('argument null');
  });

  it('returns a grid of the same size', () => {
    const initialState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    const result = getNextState(initialState);

    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(3);
  });

  // COMMENTED OUT when it no longer made sense
  // it('depends on its left neighbor - TEMPORARY TEST', () => {
  //   const initialState = [
  //     [1,0,0],
  //     [1,0,0],
  //     [1,0,0]
  //   ];

  //   const result = getNextState(initialState);

  //   expect(result).toEqual([
  //     [0,1,0],
  //     [0,1,0],
  //     [0,1,0]
  //   ])
  // });

  // COMMENTED OUT when it no longer made sense
  // it('also depends on its right neighbor - TEMPORARY TEST', () => {
  //   const initialState = [
  //     [0,0,1],
  //     [0,0,1],
  //     [0,0,1]
  //   ];

  //   const result = getNextState(initialState);

  //   expect(result).toEqual([
  //     [0,1,0],
  //     [0,1,0],
  //     [0,1,0]
  //   ])
  // });

  // COMMENTED OUT when it no longer made sense
  // it('also depends on its bottom neighbor - TEMPORARY TEST', () => {
  //   const initialState = [
  //     [0,0,0],
  //     [0,0,0],
  //     [1,1,1]
  //   ];

  //   const result = getNextState(initialState);

  //   expect(result).toEqual([
  //     [0,0,0],
  //     [1,1,1],
  //     [1,1,1]
  //   ])
  // });

  // COMMENTED OUT when it no longer made sense
  // it('survives if it has one live neighbor - TEMPORARY TEST', () => {
  //   const initialState = [
  //     [0,0,0],
  //     [0,1,0],
  //     [0,0,0]
  //   ];

  //   const result = getNextState(initialState);

  //   expect(result).toEqual([
  //     [0,1,0],
  //     [1,0,1],
  //     [0,1,0]
  //   ])
  // });

  // Any live cell with fewer than two live neighbours dies
  it('dies if it is alive and has fewer than two neighbors', () => {
    const initialState = [[1, 0, 0], [0, 0, 0], [0, 0, 1]];

    const result = getNextState(initialState);

    expect(result).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });

  // Any live cell with more than three live neighbours dies
  it('dies if it is alive and has more than three neighbors', () => {
    const initialState = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(0);
  });

  // Any live cell with two live neighbours lives
  it('lives if it is alive and has two neighbors', () => {
    const initialState = [[1, 0, 0], [1, 1, 0], [0, 0, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(1);
  });

  // Any live cell with three live neighbours lives
  it('lives if it is alive and has three neighbors', () => {
    const initialState = [[0, 1, 0], [1, 1, 1], [0, 0, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(1);
  });

  // Any dead cell with exactly three live neighbours will come to life.
  it('regenerates if it is dead and has three live neighbors', () => {
    const initialState = [[0, 1, 0], [1, 0, 1], [0, 0, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(1);
  });

  it('doesn`t regenerate if it is dead and has two live neighbors', () => {
    const initialState = [[0, 0, 0], [0, 0, 1], [0, 1, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(0);
  });

  it('doesn`t regenerate if it is dead and has four live neighbors', () => {
    const initialState = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];

    const result = getNextState(initialState);

    expect(result[1][1]).toEqual(0);
  });

  it('supports blinker', () => {
    const initialState = [[0, 1, 0], [0, 1, 0], [0, 1, 0]];

    const result = getNextState(initialState);

    expect(result).toEqual([[0, 0, 0], [1, 1, 1], [0, 0, 0]]);
  });
});
