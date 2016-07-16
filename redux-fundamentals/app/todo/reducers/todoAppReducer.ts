import {Action, combineReducers} from 'redux';
import TodosReducer, {Todo} from './todosReducer.ts';
import VisibilityReducer from './visibilityReducer.ts';

export interface ITodoAppReducer {
  todos: Todo[],
  visibilityFilter: string
}


const TodoAppReducer = combineReducers<ITodoAppReducer>({
  todos: TodosReducer,
  visibilityFilter: VisibilityReducer
});

/*export default function TodoAppReducer(state = {} as TodoApp, action: Action) {
  return {
    todos: TodosReducer(
      state.todos,
      action as TodoAction
    ),
    visibilityFilter: VisibilityReducer(
      state.visibilityFilter,
      action as VisibilityAction
    )
  };
} */

export default TodoAppReducer;