import * as React from 'react';
import { shallow } from 'enzyme';
import Badge from './badge';

describe('<Badge />', function () {
  let component;

  beforeEach(function() {
    component = shallow(
      <Badge img={'http://123.xyz'} name="jose" username="jose123" />
    );
  });

  it('renders the users avatar', function() {
    expect(component.find('img').prop('src')).toBe('http://123.xyz');
  });

  it('renders the name', function() {
    expect(component.contains('jose')).toBe(true);
  });

  it('renders the username', function() {
    expect(component.contains('jose123')).toBe(true);
  });
});
