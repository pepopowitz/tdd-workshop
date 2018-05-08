import add from './add';

describe('module-3/add', () => {
  it('exists', () => {
    const type = typeof(add);

    expect(type).toEqual('function');
  })
});