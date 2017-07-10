jest.mock('redux');
jest.mock('./todo/reducers', () => {
  return {
    todoApp: jest.fn(),
  };
});

import { createStore } from 'redux';
import { start } from './todo';
import { todoApp } from './todo/reducers';

describe('todo', function () {
  let subscribe: any;
  let getState: any;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="mainCounter">
        <div id="todo-container"></div>
      </div>
    `;
    subscribe = jest.fn();
    getState = jest.fn(() => ({todos: []}));
    (createStore as jest.Mock<any>).mockReturnValue({
      subscribe,
      getState,
    });

    start();
  });

  it('creates a store', function () {
    expect(createStore).toHaveBeenCalledWith(todoApp);
  });

  it('subscribes to the render function', function () {
    expect(subscribe).toHaveBeenCalled();
  });
});
