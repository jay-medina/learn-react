import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoList, { TodoListProps } from './TodoList';
import { Todo as TodoItem } from './reducers/todoListReducer';
import Todo from './Todo';

describe('<TodoList />', function () {
  let wrapper: ShallowWrapper<TodoListProps, any>;
  let onTodoClick: jest.Mock<void>;
  const todos = [
    { id: 0, text: 'hello', completed: false },
    { id: 2, text: 'hello2', completed: true },
  ] as TodoItem[];

  beforeEach(function () {
    onTodoClick = jest.fn();
    wrapper = shallow(
      <TodoList todos={todos} onTodoClick={onTodoClick} />,
    );
  });

  it('renders a list of todos', function () {
    expect(wrapper.find(Todo).length).toBe(2);
  });

  describe('when a Todo item is clicked', function () {
    it('invokes the onTodoClick callback with the todo id', function () {
      const onClick = wrapper.find(Todo).at(0).prop('onClick');
      onClick();

      expect(onTodoClick).toHaveBeenCalledWith(0);
    });
  });
});
