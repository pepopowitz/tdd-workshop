import _ from 'lodash';
export default function getNextState(currentState) {
  return [
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
    dummyRow(),
  ];
}

function dummyRow() {
  return [
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
    _.random(0, 1),
  ];
}
