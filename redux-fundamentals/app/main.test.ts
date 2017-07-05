jest.mock('./todo', () => {
  return {
    start: jest.fn(),
  };
});
jest.mock('./counter', () => {
  return {
    start: jest.fn(),
  };
});

import './main';
import * as Todo from './todo';
import * as Counter from './counter';

describe('main', function () {
  it('starts todo app', function() {
    expect(Todo.start).toHaveBeenCalled();
  });

  it('starts counter app', function () {
    expect(Counter.start).toHaveBeenCalled();
  });
});
