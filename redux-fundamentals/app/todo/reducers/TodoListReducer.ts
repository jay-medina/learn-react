import ActionTypes from './ActionTypes.ts';

declare module Object {
  function assign({}, ...args);
}

function addTodo(state, action) {
  const {id, text} = action;

  return [...state, {
    id,
    text,
    completed: false
  }]
}

function toggleTodo(state, action) {
  return state.map(todo => {
    if(todo.id === action.id) {
      return Object.assign({}, todo, {completed: !todo.completed});
    }

    return todo;
  });
}

function TodoListReducer(state = [], action) {
  switch(action.type) {
    case ActionTypes.ADD_TODO : return addTodo(state, action);
    case ActionTypes.TOGGLE_TODO : return toggleTodo(state, action);
  }

  return state;
}

export default TodoListReducer;