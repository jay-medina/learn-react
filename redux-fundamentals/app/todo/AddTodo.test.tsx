import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import AddTodo, { AddTodoProps } from './AddTodo';

describe('<AddTodo />', function () {
  let wrapper: ShallowWrapper<AddTodoProps, any>;
  let onClick: jest.Mock<void>;

  beforeEach(function () {
    onClick = jest.fn();
    wrapper = shallow(
      <AddTodo onAddClick={onClick} />,
    );
  });

  it('renders an input text box', function () {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders an Add Todo button', function () {
    expect(wrapper.find('button').text()).toEqual('Add Todo');
  });

  describe('when user inputs a value', function () {
    it('updates the inputValue state', function () {
      expect(wrapper.state('inputValue')).toEqual('');
      wrapper.find('input').simulate('change', mockEvent());
      expect(wrapper.state('inputValue')).toEqual('hello');
    });
  });

  describe('when user click on add todo button', function () {
    it('invokes the onClick prop', function () {
      wrapper.setState({ inputValue: 'mytodo' });
      wrapper.find('button').simulate('click');
      expect(onClick).toHaveBeenCalledWith('mytodo');
    });
  });

  function mockEvent() {
    return {
      preventDefault: jest.fn(),
      target: { value: 'hello' },
    };
  }
});
