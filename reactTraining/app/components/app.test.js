import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import Popular from './popular';

describe('<App />', function () {
  let component;

  beforeEach(function() {
    component = shallow(<App />);
  });

  it('should contain the popular component', function () {
    expect(component.contains(<Popular />)).toBe(true);
  })
});
