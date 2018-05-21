import renderSuccessfulOutput from './render-successful-output';
import renderOutput from './render-output';

import looksLike from '../../test-setup/test.looksLike';

expect.extend({
  toLookLike: looksLike,
});

jest.mock('./render-output');

describe('module-5ab/app/search-form/render-successful-output', () => {
  beforeEach(() => {
    renderOutput.mockReset();
  });

  // TODO - undo this, and have them write it!!!
  it('renders a message if there are no results', () => {
    renderSuccessfulOutput([]);

    const rendered = getArgumentFromLastCall();

    expect(rendered.outerHTML).toLookLike(
      `<h2 class="warning">No results found</h2>`
    );
  });

  it('renders a list if there are results', () => {
    const results = [
      {
        name: 'name 1',
        distance: 1.1,
        sport: 'sport 1',
        hills: 'hills 1',
      },
      {
        name: 'name 2',
        distance: 2.2,
        sport: 'sport 2',
        hills: 'hills 2',
      }
    ]

    renderSuccessfulOutput(results);

    const rendered = getArgumentFromLastCall();

    expect(rendered.outerHTML).toLookLike(
      `<ul>
        <li>
          <div class="trail">
            <h3>📛 name 1</h3>
            <h4>🏃‍ sport 1</h4>
            <h4>📏 1.1 miles</h4>
            <h4>⛰️ hills 1</h4>
          </div>
        </li>
        <li>
          <div class="trail">
            <h3>📛 name 2</h3>
            <h4>🏃‍ sport 2</h4>
            <h4>📏 2.2 miles</h4>
            <h4>⛰️ hills 2</h4>
          </div>
        </li>
      </ul>`
    );
  });
});

function getArgumentFromLastCall() {
  if (renderOutput.mock.calls.length === 0) {
    return undefined;
  }
  const lastCallArgs = renderOutput.mock.calls[renderOutput.mock.calls.length - 1];
  if (lastCallArgs.length === 0) {
    return undefined;
  }
  return lastCallArgs[0];
}