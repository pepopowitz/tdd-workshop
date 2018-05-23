import renderSuccessfulOutput from './render-successful-output';

import renderOutput from './render-output';

import looksLike from '../../test-setup/test.looksLike';

expect.extend({
  toLookLike: looksLike,
});

jest.mock('./render-output');

describe('module-5ab/app/search-form/render-successful-output', () => {
  beforeEach(() => {
    //... no changes
  });

  it('renders a list if there are results', () => {
    //... no changes
  });

  // SOLUTION!
  it('renders a message if there are no results', () => {
    renderSuccessfulOutput([]);

    const rendered = getArgumentFromLastCall();

    expect(rendered.outerHTML).toLookLike(
      `<h2 class="warning">No results found</h2>`
    );
  });
});

function getArgumentFromLastCall() {
  //... no changes
}