import Counter from './Counter';

describe('Counter', function () {
  it('returns back the same state', function () {
    const state = 1;

    expect(Counter(state, 'meow')).toBe(state);
  });
});
