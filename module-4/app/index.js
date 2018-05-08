import _ from 'lodash';

import './index.css';

export default function App({lifeState, startGame, stopGame}) {
  let element = document.createElement('div');

  const title = Title();
  element.appendChild(title);

  const actions = Actions({startGame, stopGame});
  element.appendChild(actions);

  const grid = Grid({lifeState});
  element.appendChild(grid);

  return element;
}

function Grid({lifeState}) {
  let grid = document.createElement('div');
  grid.className = 'grid';

  lifeState.forEach(valueRow => {
    const row = Row({ items: valueRow });
    grid.appendChild(row);
  });

  return grid;
}

function Actions({startGame, stopGame}) {
  let element = document.createElement('div');
  element.className = 'actions';

  let startButton = document.createElement('button');
  startButton.setAttribute('type', 'button');
  startButton.textContent = 'Start';
  startButton.onclick = startGame;
  element.appendChild(startButton);
  
  let stopButton = document.createElement('button');
  stopButton.setAttribute('type', 'button');
  stopButton.textContent = 'Stop';
  stopButton.onclick = stopGame;
  element.appendChild(stopButton);

  return element;
}

function Title() {
  let h1 = document.createElement('h1');
  h1.innerHTML = "Conway's Game Of Life";

  return h1;
}

function Row({ items }) {
  let row = document.createElement('div');
  row.className = 'row';

  items.forEach(value => {
    row.appendChild(Item({ alive: value === 1 }));
  });

  return row;
}

function Item({ alive = false }) {
  let element = document.createElement('div');
  element.classList.add('item');

  if (alive) {
    element.classList.add('alive');
  }

  return element;
}
