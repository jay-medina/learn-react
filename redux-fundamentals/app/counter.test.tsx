jest.mock('redux');

import { createStore } from 'redux';

describe('counter', function() {
  beforeEach(() => {
    require('./counter');
  });
  it('creates a store', function() {
    expect(createStore).toHaveBeenCalledWith(expect.any(Function));
  });  
});
