jest.mock('redux');
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

import { combineReducers } from 'redux';
import { todoApp, TodoAppState} from './index';
import { todos, TodoAction } from './todoListReducer';
import { visibilityFilter } from './visibilityFilterReducer';

describe('todo/reducer', function () {
  const stateBefore = {} as TodoAppState;

  it('calls `combineReducers` with composed reducers', function () {
    todoApp<TodoAction>(stateBefore, {} as any);

    expect(combineReducers).toHaveBeenCalledWith(expect.objectContaining({
      todos,
      visibilityFilter,
    }));
  });
});
