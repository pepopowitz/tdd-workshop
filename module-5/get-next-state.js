// This is where you'll be implementing the Game of Life!

import _ from 'lodash';

// The expected output of getNextState is an array of arrays,
//   signifying multiple rows of cells.
// Example, A 4x4 grid of cells:
// [
//   [0,0,0,0], // a row of 4 cells, where no cells are active
//   [1,1,1,1], // a row of 4 cells, where all 4 cells are active
//   [0,0,1,1], // a row of 4 cells. The first 2 inactive, the second 2 active.
//   [0,0,0,0] // a 4th row of 4 cells, all inactive.
// ]

// This is the function you need to implement!
export default function getNextState(currentState) {
  if (currentState === undefined) {
    throw new Error('argument null');
  }

  const rows = currentState.length;
  const columns = currentState[0].length;

  return _.range(0, rows).map(() => dummyRow(columns));
}

function dummyRow(columns) {
  return _.range(0, columns).map(() => (_.random(0, 3) < 3 ? 0 : 1));
}
