import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Counter } from './Counter';

describe('counter/Counter', function() {
  let wrapper: ShallowWrapper<any, any>;
  let onDecrement: jest.Mock<any>;
  let onIncrement: jest.Mock<any>;

  beforeEach(function () {
    onDecrement = jest.fn();
    onIncrement = jest.fn();
    wrapper = shallow(
      <Counter
        value={123}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />,
    );
  });

  test('renders the value', function () {
    expect(wrapper.find('h1').text()).toBe('123');
  });

  it('renders the increment/decrement buttons', function () {
    expect(wrapper.find('button').length).toBe(2);
  });

  describe('when increment is clicked', function () {
    it('invokes the increment callback', function () {
      wrapper.find('.counter__increment-btn').simulate('click');
      expect(onIncrement).toHaveBeenCalled();
    });
  });

  describe('when decrement is clicked', function () {
    it('invokes the decrement callback', function () {
      wrapper.find('.counter__decrement-btn').simulate('click');
      expect(onDecrement).toHaveBeenCalled();
    });
  });
});
