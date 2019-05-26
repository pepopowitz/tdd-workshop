// TODO - undo this, and have them write it!!!
import renderErroneousOutput from './render-erroneous-output';
import renderOutput from './render-output';

import looksLike from '../../test-setup/test.looksLike';

expect.extend({
  toLookLike: looksLike,
});

jest.mock('./render-output');

describe('module-4ab/app/search-form/render-erroneous-output', () => {
  it('renders an error', () => {
    const result = renderErroneousOutput('Something happened');

    const rendered = getArgumentFromLastCall();

    expect(rendered.outerHTML).toLookLike(
      `<div><h2 class="error">Something happened</h2></div>`
    );
  });
});

function getArgumentFromLastCall() {
  if (renderOutput.mock.calls.length === 0) {
    return undefined;
  }
  const lastCallArgs =
    renderOutput.mock.calls[renderOutput.mock.calls.length - 1];
  if (lastCallArgs.length === 0) {
    return undefined;
  }
  return lastCallArgs[0];
}
