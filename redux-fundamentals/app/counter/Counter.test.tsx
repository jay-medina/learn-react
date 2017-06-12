import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Counter } from './Counter';

interface TestContext {
  wrapper: ShallowWrapper<any, any>;
  onDecrement: jest.Mock<any>;
  onIncrement: jest.Mock<any>;
}

describe('counter/<Counter />', function() {
  beforeEach(function (this: TestContext) {
    this.onDecrement = jest.fn();
    this.onIncrement = jest.fn();
    this.wrapper = shallow(
      <Counter 
        value={123}
        onDecrement={this.onDecrement}
        onIncrement={this.onIncrement}
      />
    );
    console.log('wrapper', this.wrapper);
  });

  it('renders the value', function (this: TestContext) {
    console.log('wrapper', this.wrapper);
    expect(this.wrapper.find('h1').text()).toBe('123');
  });

  it('renders the increment/decrement buttons', function (this: TestContext) {
    expect(true).toBe(false);
  });

  describe('when increment is clicked', function () {
    it('invokes the increment callback', function (this: TestContext) {
      expect(true).toBe(false);
    });
  });

  describe('when decrement is clicked', function () {
    it('invokes the decrement callback', function (this: TestContext) {
      expect(true).toBe(false);
    });
  });
});
