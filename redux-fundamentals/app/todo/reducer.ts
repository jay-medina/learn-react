export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoAction {
  type: 'ADD_TODO';
  id: number;
  text: string;
}

function addTodo(state: Todo[], action: TodoAction) {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ];
}

export const todos = (state = [] as Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO': return addTodo(state, action);
    default: return state;
  }
};
