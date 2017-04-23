import * as React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', function () {
  let component;

  beforeEach(function() {
    component = shallow(<App />);
  });

  it('should contain hello react training', function () {
    expect(component.contains('Hello react training!')).toBe(true);
  })
});
