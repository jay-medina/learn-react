import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import TodoApp from './TodoApp';

describe('todo/TodoApp', function() {
  let wrapper: ShallowWrapper<any, any>;

  beforeEach(function() {
    wrapper = shallow(
      <TodoApp />,
    );
  });

  it('renders hello', function () {
    expect(wrapper.text()).toEqual('Hello from TodoApp');
  });
});
