import App from './index';

import looksLike from '../test.looksLike';

expect.extend({
  toLookLike: looksLike,
});

describe('app/index.js', () => {
  it('draws the shell', () => {
    const lifeState = [[1, 0, 1, 0, 1]];

    const result = App({lifeState});

    expect(result.outerHTML).toLookLike(
      `<div>
        <h1>Conway's Game Of Life</h1>
        <div class="actions">{{}}</div>
        <div class="grid">{{}}</div>
      </div>`
    );
  });

  it('draws the actions', () => {
    const lifeState = [[1, 0, 1, 0, 1]];

    const result = App({lifeState});

    expect(result.outerHTML).toLookLike(
      `<div>
        {{}}
        <div class="actions">
          <button type="button">Start</button>
          <button type="button">Stop</button>
        </div>
        {{}}
      </div>`
    )
  });

  it('draws a row of items', () => {
    const lifeState = [[1, 0, 1, 0, 1]];

    const result = App({lifeState});

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
    const lifeState = [[1, 0, 1], [0, 1, 0]];

    const result = App({lifeState});

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
