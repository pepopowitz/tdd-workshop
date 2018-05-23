import renderSuccessfulOutput from './render-successful-output';

// This is the dependency we will mock.
import renderOutput from './render-output';

// looksLike is a function we'll use to add a new Jest matcher, for comparing HTML.
import looksLike from '../../test-setup/test.looksLike';

// expect.extend adds a new Jest matcher, in this case named `toLookLike`.
expect.extend({
  toLookLike: looksLike,
});

// Mock the dependency.
jest.mock('./render-output');

describe('module-5ab/app/search-form/render-successful-output', () => {
  // Reset the mock.
  beforeEach(() => {
    renderOutput.mockReset();
  });

  it('renders a list if there are results', () => {
    // In this test we don't need to provide a fake implementation; we just want to 
    //  "spy" on the original, to see what gets passed to it.
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

    // This function will grab the argument we passed to the last call of renderOutput.
    const rendered = getArgumentFromLastCall();

    // Then we can compare that argument's outerHTML to some actual markup.
    //  Note that we're using our new `toLookLike` matcher that we added via `expect.extend`.
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

// This function grabs the argument we passed to the last call of renderOutput, if it exists.
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