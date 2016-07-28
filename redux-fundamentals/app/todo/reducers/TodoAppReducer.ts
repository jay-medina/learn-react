import {combineReducers, Action} from 'redux';

import TodoListReducer from './TodoListReducer.ts';
import VisibilityFilterReducer from './VisibilityFilterReducer.ts';

export interface TodoAppState {
  todos: any[],
  visibilityFilter: string
}

const TodoAppReducer = combineReducers<TodoAppState>({
  todos: TodoListReducer,
  visibilityFilter: VisibilityFilterReducer
});

export default TodoAppReducer;