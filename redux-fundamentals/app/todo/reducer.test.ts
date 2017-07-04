jest.mock('./todoListReducer', () => {
  return {
    todos: jest.fn(),
  };
});

jest.mock('./visibilityFilterReducer', () => {
  return {
    visibilityFilter: jest.fn(),
  };
});

import {todoApp, TodoApp} from './reducer';
import { todos } from './todoListReducer';
import { visibilityFilter } from './visibilityFilterReducer';

describe('todo/reducer', function () {
  const stateBefore = {} as TodoApp;
  let stateAfter: TodoApp;

  it('calls the todo reducer', function() {
    stateAfter = todoApp(stateBefore, {} as any);
    expect(todos).toHaveBeenCalled();
  });

  it('calls the visibility Filter reducer', function() {
    stateAfter = todoApp(undefined, {} as any);
    expect(visibilityFilter).toHaveBeenCalled();
  });
});
