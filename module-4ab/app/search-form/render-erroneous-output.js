import renderOutput from './render-output';

export default function renderErroneousOutput(error) {
  const output = generateErrorMessage(error);

  renderOutput(output);
}

function generateErrorMessage(error) {
  let result = document.createElement('div');

  let h2 = document.createElement('h2');
  h2.className = 'error';
  h2.textContent = error;

  result.appendChild(h2);
  return result;
}
