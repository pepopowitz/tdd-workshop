// SOLUTION! (whole file)

import _ from 'lodash';

export default function getNextState(currentState) {
  if (currentState === undefined) {
    throw new Error('argument null');
  }

  let result = [];
  for (let rowIndex = 0; rowIndex < currentState.length; rowIndex++) {
    let resultRow = [];
    const row = currentState[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cellState = currentState[rowIndex][colIndex];
      const livingNeighborCount = getNeighborCount(
        currentState,
        rowIndex,
        colIndex
      );

      resultRow.push(cellSurvives(cellState, livingNeighborCount));
    }
    result.push(resultRow);
  }

  return result;
}

function getNeighborCount(currentState, rowIndex, colIndex) {
  return (
    leftIsAlive(currentState, rowIndex, colIndex) +
    rightIsAlive(currentState, rowIndex, colIndex) +
    bottomIsAlive(currentState, rowIndex, colIndex) +
    topIsAlive(currentState, rowIndex, colIndex) +
    topLeftIsAlive(currentState, rowIndex, colIndex) +
    topRightIsAlive(currentState, rowIndex, colIndex) +
    bottomLeftIsAlive(currentState, rowIndex, colIndex) +
    bottomRightIsAlive(currentState, rowIndex, colIndex)
  );
}

function cellSurvives(cellState, livingNeighborCount) {
  if (cellState === 1) {
    if (livingNeighborCount > 3) {
      return 0;
    }
    if (livingNeighborCount < 2) {
      return 0;
    }
    return 1;
  }

  if (livingNeighborCount === 3) {
    return 1;
  }
  return 0;
}

function leftIsAlive(grid, rowIndex, colIndex) {
  if (colIndex > 0) {
    return grid[rowIndex][colIndex - 1];
  }
  return 0;
}

function rightIsAlive(grid, rowIndex, colIndex) {
  if (colIndex < grid[0].length - 1) {
    return grid[rowIndex][colIndex + 1];
  }
  return 0;
}

function bottomIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex < grid.length - 1) {
    return grid[rowIndex + 1][colIndex];
  }
  return 0;
}

function topIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex > 0) {
    return grid[rowIndex - 1][colIndex];
  }
  return 0;
}

function topLeftIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex > 0 && colIndex > 0) {
    return grid[rowIndex - 1][colIndex - 1];
  }
  return 0;
}

function topRightIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex > 0 && colIndex < grid[0].length - 1) {
    return grid[rowIndex - 1][colIndex + 1];
  }
  return 0;
}

function bottomLeftIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex < grid.length - 1 && colIndex > 0) {
    return grid[rowIndex + 1][colIndex - 1];
  }
  return 0;
}

function bottomRightIsAlive(grid, rowIndex, colIndex) {
  if (rowIndex < grid.length - 1 && colIndex < grid[0].length - 1) {
    return grid[rowIndex + 1][colIndex + 1];
  }
  return 0;
}
