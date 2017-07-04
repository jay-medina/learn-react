export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoAction {
  type: 'ADD_TODO' | 'TOGGLE_TODO';
  id: number;
  text?: string;
}

function addTodo(state: Todo[], action: TodoAction) {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ] as Todo[];
}

function toggleTodo(state: Todo[], action: TodoAction) {
  return state.map((todo: Todo) => {
    if (todo.id === action.id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
}

export const todos = (state = [] as Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO': return addTodo(state, action);
    case 'TOGGLE_TODO': return toggleTodo(state, action);
    default: return state;
  }
};
