import renderOutput from './render-output';

export default function renderSuccessfulOutput(items) {
  let output;

  if (items.length === 0) {
    output = generateNoResultsFound();
  } else {
    output = generateResults(items);
  }

  renderOutput(output);
}

function generateNoResultsFound() {
  let message = document.createElement('h2');
  message.className = 'warning';
  message.textContent = 'No results found';

  return message;
}

function generateResults(results) {
  let ul = document.createElement('ul');
  
  let items = results.map(mapItem);
  items.forEach(item => ul.appendChild(item));

  return ul;
}

function mapItem(result) {
  let item = document.createElement('li');

  let wrapper = document.createElement('div');
  wrapper.className = 'trail';

  wrapper.appendChild(createElementWithText('h3', `📛 ${result.name}`));
  wrapper.appendChild(createElementWithText('h4', `🏃‍ ${result.sport}`));
  wrapper.appendChild(createElementWithText('h4', `📏 ${result.distance} miles`));
  wrapper.appendChild(createElementWithText('h4', `⛰️ ${result.hills}`));

  item.appendChild(wrapper);

  return item;
}

function createElementWithText(element, text) {
  let result = document.createElement(element);
  result.textContent = text;
  return result;
}