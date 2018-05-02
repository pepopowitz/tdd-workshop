import App from './app';
import getNextState from './get-next-state';

// initial render
let lifeState = getNextState();

let rendered = App({lifeState, startGame, stopGame});
document.body.appendChild(rendered);

// interval render
function render(){
  const lifeState = getNextState();
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

