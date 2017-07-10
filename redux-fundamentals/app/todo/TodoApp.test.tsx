import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoApp from './TodoApp';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { FilterLink } from './FilterLink';

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

  it('renders an input text box', function () {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders an Add Todo button', function () {
    expect(wrapper.find('button').text()).toEqual('Add Todo');
  });

  it('renders a list of todos', function () {
    expect(wrapper.find('li').length).toBe(2);
  });

  it('renders completed todos as scratched out', function () {
    expect(wrapper.find('li').at(1).hasClass('completed')).toBe(true);
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
      expect(wrapper.find('li').length).toBe(1);
      expect(wrapper.find('li').hasClass('completed')).toBe(false);
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
      expect(wrapper.find('li').length).toBe(1);
      expect(wrapper.find('li').hasClass('completed')).toBe(true);
    });
  });

  describe('when user inputs a value', function () {
    it('updates the inputValue state', function () {
      expect(wrapper.state('inputValue')).toEqual('');
      wrapper.find('input').simulate('change', mockEvent());
      expect(wrapper.state('inputValue')).toEqual('hello');
    });
  });

  describe('when add todo button is clicked', function () {
    beforeEach(function () {
      wrapper.setState({ inputValue: 'newTodo!' });
      wrapper.find('button').simulate('click');
    });
    it('dispatches an add todo action', function () {
      expect(dispatch).toHaveBeenCalledWith({
        type: 'ADD_TODO',
        text: 'newTodo!',
        id: 1,
      });
    });

    it('resets the input value state', function () {
      expect(wrapper.state('inputValue')).toEqual('');
    });
  });

  describe('when clicking on a todo', function () {
    it('dispatches a toggle todo action', function () {
      dispatch.mockClear();
      wrapper.find('li').at(0).simulate('click');
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
