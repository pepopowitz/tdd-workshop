import renderOutput from './render-output';

export default function renderSuccessfulOutput(items) {
  let output;

  // SOLUTION!
  if (items.length === 0) {
    output = generateNoResultsFound();
  } else {
    output = generateResults(items);
  }

  renderOutput(output);
}

// SOLUTION!
function generateNoResultsFound() {
  let message = document.createElement('h2');
  message.className = 'warning';
  message.textContent = 'No results found';

  return message;
}

function generateResults(results) {
  //... no changes
}

function mapItem(result) {
  //... no changes
}

function createElementWithText(element, text) {
  //... no changes
}