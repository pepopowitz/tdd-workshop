// This file runs the Game of Life. You shouldn't need to touch anything in here, 
//  but look around if you're curious!

import App from './app';
import getNextState from './get-next-state';

// This is the initial render of the app
let lifeState = getInitialState();

let rendered = App({lifeState, startGame, stopGame});
document.body.appendChild(rendered);

// This function is called at an interval, to re-render the cells.
function render(){
  lifeState = getNextState(lifeState);
  const replacement = App({lifeState, startGame, stopGame});
  document.body.replaceChild(replacement, rendered);
  rendered = replacement;
}

// actions
let interval;
function startGame(){
  if (interval) {
    window.clearInterval(interval);
  }
  interval = window.setInterval(render, 500);
}

function stopGame() {
  window.clearInterval(interval);
}

function getInitialState() {
  return _.range(0, 40)
    .map(() => dummyRow());
}

function dummyRow() {
  return _.range(0,40)
    .map(() => _.random(0, 3) < 3 ? 0 : 1);
}
