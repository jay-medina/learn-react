import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Todo, { TodoProps } from './Todo';

describe('<Todo />', function () {
  let wrapper: ShallowWrapper<TodoProps, any>;
  let onClick: jest.Mock<void>;

  beforeEach(function () {
    onClick = jest.fn();
    wrapper = shallow(
      <Todo text="my todo" onClick={onClick} />,
    );
  });

  it('renders an li with the text as its child', function () {
    expect(wrapper.find('li').text()).toBe('my todo');
  });

  describe('when completed', function () {
    it('has the completed className', function () {
      wrapper = shallow(
        <Todo text="my todo" onClick={onClick} completed />,
      );
      expect(wrapper.find('li').hasClass('completed')).toBe(true);
    });
  });

  describe('when clicked', function () {
    it('invokes the onClick method on the props', function () {
      wrapper.find('li').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
