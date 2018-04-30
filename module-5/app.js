import _ from 'lodash';

import doStuff from './rules';
import './app.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello?', 'webpack!'], ' ');
  
  btn.innerHTML = 'do stuff!';
  btn.onclick = doStuff;
  btn.classList.add('hello');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());