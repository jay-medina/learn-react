import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoApp from './TodoApp';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { FilterLink } from './FilterLink';
import TodoList from './TodoList';
import {AddTodo} from './AddTodo';

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

  it('renders the filter links', function () {
    expect(wrapper.find(FilterLink).length).toBe(3);
  });

  it('indicates that show all filter link is active', function () {
    const AllFilterLink = wrapper.find(FilterLink).at(0);
    expect(AllFilterLink.prop('filter')).toEqual('SHOW_ALL');
    expect(AllFilterLink.prop('active')).toBe(true);
  });

  describe('when filter is active', function () {
    beforeEach(function () {
      wrapper = shallow(
        <TodoApp dispatch={dispatch} todos={todos} visibilityFilter="SHOW_ACTIVE" />,
      );
    });

    it('show all filter link is not active', function () {
      const AllFilterLink = wrapper.find(FilterLink).at(0);
      expect(AllFilterLink.prop('active')).toBe(false);
    });

    it('indicates that show active filter link is active', function () {
      const AllFilterLink = wrapper.find(FilterLink).at(2);
      expect(AllFilterLink.prop('filter')).toEqual('SHOW_ACTIVE');
      expect(AllFilterLink.prop('active')).toBe(true);
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

    it('indicates that show completed filter link is active', function () {
      const AllFilterLink = wrapper.find(FilterLink).at(1);
      expect(AllFilterLink.prop('filter')).toEqual('SHOW_COMPLETED');
      expect(AllFilterLink.prop('active')).toBe(true);
    });

    it('only renders active todo items', function () {
      const todos = wrapper.find(TodoList).prop('todos');
      expect(todos.length).toBe(1);
      expect(todos[0].completed).toBe(true);
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
