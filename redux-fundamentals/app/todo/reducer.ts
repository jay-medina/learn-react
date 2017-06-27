export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export function toggleTodo(todo: Todo) {
  return {
    ...todo,
    completed: !todo.completed,
  };
}
