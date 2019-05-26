// This is where you'll be writing tests!

import getNextState from './get-next-state';

describe('module-5/get-next-state', () => {
  // You can keep this test, if it is useful to you.
  //  I'd be surprised if you don't delete it eventually, though.
  it('returns a 40x40 grid', () => {
    const result = getNextState();

    expect(result.length).toEqual(40);
    expect(result[0].length).toEqual(40);
  });

  // Write some more tests here!!!!
});
