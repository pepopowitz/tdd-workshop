import _ from 'lodash';
export default function getNextState(currentState) {
  return _.range(0, 40)
  .map(() => dummyRow());
}

function dummyRow() {
return _.range(0,40)
  .map(() => _.random(0, 3) < 3 ? 0 : 1);
}
