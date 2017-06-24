import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Counter } from './Counter';

describe('counter/Counter', function() {
  let wrapper: ShallowWrapper<any, any>;
  let dispatch: jest.Mock<any>;

  beforeEach(function () {
    dispatch = jest.fn();
    wrapper = shallow(
      <Counter
        value={123}
        dispatch={dispatch}
      />,
    );
  });

  it('renders the value', function () {
    expect(wrapper.find('h1').text()).toBe('123');
  });

  it('renders the increment/decrement buttons', function () {
    expect(wrapper.find('button').length).toBe(2);
  });

  describe('when increment is clicked', function () {
    it('dispatches an increment action', function () {
      wrapper.find('.counter__increment-btn').simulate('click');
      expect(dispatch).toHaveBeenCalledWith({ type: 'INCREMENT' });
    });
  });

  describe('when decrement is clicked', function () {
    it('dispatches an decrement action', function () {
      wrapper.find('.counter__decrement-btn').simulate('click');
      expect(dispatch).toHaveBeenCalledWith({ type: 'DECREMENT' });
    });
  });
});
