import TodoListReducer from './TodoListReducer.ts';
import VisibilityFilterReducer from './VisibilityFilterReducer.ts';

export interface TodoAppState {
  todos: any[],
  visibilityFilter: string
}

function TodoAppReducer(state = {} as TodoAppState, action) {
  return {
    todos: TodoListReducer(state.todos, action),
    visibilityFilter: VisibilityFilterReducer(state.visibilityFilter, action)
  }
}

export default TodoAppReducer;