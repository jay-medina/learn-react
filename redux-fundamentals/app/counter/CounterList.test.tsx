import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import CounterList from './CounterList';

describe('counter/CounterList', function () {
  let wrapper: ShallowWrapper<any, any>;
  let listOfCounters: number[];
  let dispatch: jest.Mock<any>;

  beforeEach(function () {
    listOfCounters = [0, 1, 1];
    dispatch = jest.fn();

    wrapper = shallow(
      <CounterList
        counters={listOfCounters}
        dispatch={dispatch}
      />,
    );
  });

  it('renders a list of counters', function () {
    expect(wrapper.children('Counter').length).toBe(3);
  });

  it('renders an add button', function() {
    const addCounter = wrapper.find('.add-counter');
    expect(addCounter.length).toBe(1);
    expect(addCounter.text()).toBe('Add Counter');
  });

  it('renders a remove button', function() {
    const removeCounter = wrapper.find('.remove-counter');
    expect(removeCounter.length).toBe(1);
    expect(removeCounter.text()).toBe('Remove Counter');
  });

  describe('when add counter button is clicked', function() {
    it('dispatches action to add another counter', function() {
      const addCounter = wrapper.find('.add-counter');
      addCounter.simulate('click');
      expect(dispatch).toHaveBeenCalledWith({type: 'ADD_COUNTER'});
    });
  });

  describe('when remove counter button is clicked', function() {
    it('dispatches action to remove a counter', function() {
      const removeCounter = wrapper.find('.remove-counter');
      removeCounter.simulate('click');
      expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_COUNTER', index: expect.any(Number) });
    });
  });

});
