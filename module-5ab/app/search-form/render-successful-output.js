// The renderSuccessfulOutput function would have had DOM manipulation in it, 
//  but I isolated that DOM manipulation, and extracted it to a function named renderOutput.
// For our tests, we can mock renderOutput, and assert that we are interacting with it
//  properly, instead of writing more expensive tests against DOM manipulation.
import renderOutput from './render-output';

export default function renderSuccessfulOutput(items) {
  let output;

  // TODO - remove this, and make them write it!
  if (items.length === 0) {
    output = generateNoResultsFound();
  } else {
    output = generateResults(items);
  }

  // Here's the call to renderOutput, which does the actual DOM manipulation.
  renderOutput(output);
}

// TODO - remove this, and make them write it!
// These other functions are generating DOM elements, but they aren't actually 
//  manipulating the DOM. 
function generateNoResultsFound() {
  let message = document.createElement('h2');
  message.className = 'warning';
  message.textContent = 'No results found';

  return message;
}

// These other functions are generating DOM elements, but they aren't actually 
//  manipulating the DOM. 
function generateResults(results) {
  let ul = document.createElement('ul');
  
  let items = results.map(mapItem);
  items.forEach(item => ul.appendChild(item));

  return ul;
}

// These other functions are generating DOM elements, but they aren't actually 
//  manipulating the DOM. 
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

// These other functions are generating DOM elements, but they aren't actually 
//  manipulating the DOM. 
function createElementWithText(element, text) {
  let result = document.createElement(element);
  result.textContent = text;
  return result;
}