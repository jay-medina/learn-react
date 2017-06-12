import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Counter } from './Counter';

interface TestContext {
  wrapper: ShallowWrapper<any, any>;
  onDecrement: jest.Mock<any>;
  onIncrement: jest.Mock<any>;
  meow: string;
}

describe('counter/Counter', function() {
  let context = {} as TestContext;

  beforeEach(function () {
    context.onDecrement = jest.fn();
    context.onIncrement = jest.fn();
    context.wrapper = shallow(
      <Counter
        value={123}
        onDecrement={context.onDecrement}
        onIncrement={context.onIncrement}
      />
    );
  });

  test('renders the value', function () {
    expect(context.wrapper.find('h1').text()).toBe('123');
  });

  it('renders the increment/decrement buttons', function () {
    expect(context.wrapper.find('button').length).toBe(2);
  });

  describe('when increment is clicked', function () {
    it('invokes the increment callback', function () {
      context.wrapper.find('.counter__increment-btn').simulate('click');
      expect(context.onIncrement).toHaveBeenCalled();
    });
  });

  describe('when decrement is clicked', function () {
    it('invokes the decrement callback', function () {
      context.wrapper.find('.counter__decrement-btn').simulate('click');
      expect(context.onDecrement).toHaveBeenCalled();
    });
  });
});
