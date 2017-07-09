import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoApp from './TodoApp';
import { Todo, TodoAction } from './todoListReducer';

describe('todo/TodoApp', function() {
  let wrapper: ShallowWrapper<any, any>;
  const dispatch = jest.fn();
  const todos = [
    { id: 0, text: 'hello', completed: false },
    { id: 2, text: 'hello2', completed: true },
  ] as Todo[];

  beforeEach(function() {
    wrapper = shallow(
      <TodoApp dispatch={dispatch} todos={todos}/>,
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
