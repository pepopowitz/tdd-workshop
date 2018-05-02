import app from './index';

import getNextState from '../get-next-state';
import looksLike from '../test.looksLike';

expect.extend({
  toLookLike: looksLike,
});

jest.mock('../get-next-state');

describe('app/index.js', () => {
  beforeEach(() => {
    getNextState.mockClear();
  });

  it('draws the shell', () => {
    getNextState.mockReturnValue([[1, 0, 1, 0, 1]]);

    const result = app();

    expect(result.outerHTML).toLookLike(
      `<div>
        <h1>Conway's Game Of Life</h1>
        <div class="grid">{{}}</div>
      </div>`
    );
  });

  it('draws a row of items', () => {
    getNextState.mockReturnValue([[1, 0, 1, 0, 1]]);

    const result = app();

    expect(result.outerHTML).toLookLike(
      `<div>
        {{}}
        <div class="grid">
          <div class="row">
            <div class="item alive"></div>
            <div class="item"></div>
            <div class="item alive"></div>
            <div class="item"></div>
            <div class="item alive"></div>
          </div>
        </div>
      </div>`
    );
  });

  it('draws multiple rows of items', () => {
    getNextState.mockReturnValue([[1, 0, 1], [0, 1, 0]]);

    const result = app();

    expect(result.outerHTML).toLookLike(
      `<div>
        {{}}
        <div class="grid">
          <div class="row">
            <div class="item alive"></div>
            <div class="item"></div>
            <div class="item alive"></div>
          </div>
          <div class="row">
            <div class="item"></div>
            <div class="item alive"></div>
            <div class="item"></div>
          </div>
        </div>
      </div>`
    );
  });
});
