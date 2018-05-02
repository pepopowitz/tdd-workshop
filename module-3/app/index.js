import _ from 'lodash';

import getNextState from '../get-next-state';
import './index.css';

export default function App() {
  var element = document.createElement('div');
  
  const title = Title();
  element.appendChild(title);

  const grid = Grid();
  element.appendChild(grid);

  return element;
}

function Grid() {
  const grid = document.createElement('div');
  grid.className = 'grid';

  const values = getNextState();
  values.forEach(valueRow => {
    const row = Row({items: valueRow});
    grid.appendChild(row);
  });

  return grid;
}

function Title() {
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Conway\'s Game Of Life';

  return h1;
}

function Row({items}) {
  const row = document.createElement('div');
  row.className = 'row';
  
  items.forEach(value => {
    row.appendChild(Item({alive: value === 1}));
  });

  return row;
};

function Item({alive = false}) {
  var element = document.createElement('div');
  element.classList.add('item');

  if (alive) {
    element.classList.add('alive');
  }

  return element;
}