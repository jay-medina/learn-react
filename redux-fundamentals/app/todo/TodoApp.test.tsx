import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoApp from './TodoApp';
import { Todo, TodoAction } from './reducers/todoListReducer';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

describe('todo/TodoApp', function() {
  let wrapper: ShallowWrapper<any, any>;
  const dispatch = jest.fn();
  const todos = [
    { id: 0, text: 'hello', completed: false },
    { id: 2, text: 'hello2', completed: true },
  ] as Todo[];

  beforeEach(function() {
    wrapper = shallow(
      <TodoApp dispatch={dispatch} todos={todos} visibilityFilter="SHOW_ALL"/>,
    );
  });

  it('renders an Add Todo Section', function () {
    expect(wrapper.find(AddTodo).length).toBe(1);
  });

  it('renders a list of todos', function () {
    expect(wrapper.find(TodoList).length).toBe(1);
  });

  it('renders the Footer', function () {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  describe('when filter is active', function () {
    beforeEach(function () {
      wrapper = shallow(
        <TodoApp dispatch={dispatch} todos={todos} visibilityFilter="SHOW_ACTIVE" />,
      );
    });

    it('only renders active todo items', function () {
      const todos = wrapper.find(TodoList).prop('todos');
      expect(todos.length).toBe(1);
      expect(todos[0].completed).toBe(false);
    });
  });

  describe('when filter is completed', function () {
    beforeEach(function () {
      wrapper = shallow(
        <TodoApp dispatch={dispatch} todos={todos} visibilityFilter="SHOW_COMPLETED" />,
      );
    });

    it('only renders completed todo items', function () {
      const todos = wrapper.find(TodoList).prop('todos');
      expect(todos.length).toBe(1);
      expect(todos[0].completed).toBe(true);
    });
  });

  describe('when a filter is clicked', function () {
    it('tries to set the new visibility filter', function () {
      const onFilterClick = wrapper.find(Footer).prop('onFilterClick');
      onFilterClick('SHOW_ACTIVE');
      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      });
    });
  });

  describe('when add todo button is clicked', function () {
    it('dispatches an add todo action', function () {
      const onAddClick = wrapper.find(AddTodo).prop('onAddClick');
      onAddClick('newTodo!');
      expect(dispatch).toHaveBeenCalledWith({
        type: 'ADD_TODO',
        text: 'newTodo!',
        id: 1,
      });
    });
  });

  describe('when clicking on a todo', function () {
    it('dispatches a toggle todo action', function () {
      dispatch.mockClear();
      const onTodoClick = wrapper.find(TodoList).prop('onTodoClick');
      onTodoClick(0);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'TOGGLE_TODO',
        id: 0,
      });
    });
  });

  function mockEvent() {
    return {
      preventDefault: jest.fn(),
      target: { value: 'hello' },
    };
  }
});
