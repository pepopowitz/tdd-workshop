import _ from 'lodash';

import getNextState from '../get-next-state';
import './index.css';

export default function app() {
  var element = document.createElement('div');
  // var btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  // btn.innerHTML = 'do stuff!';
  // btn.onclick = doStuff;
  // btn.classList.add('hello');
  // element.appendChild(btn);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Conway\'s Game Of Life';
  element.appendChild(h1);

  const grid = document.createElement('div');
  grid.className = 'grid';
  
  const values = getNextState();
  values.forEach(value => {
    grid.appendChild(item({alive: value === 1}))
  });

  element.appendChild(grid);
  return element;
}

function item({alive = false}) {
  var element = document.createElement('div');
  element.classList.add('item');
  if (alive) {
    element.classList.add('alive');
  }
  return element;
}