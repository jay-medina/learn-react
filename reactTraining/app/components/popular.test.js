import React from 'react';
import { mount } from 'enzyme';
import Popular from './popular';

describe('<Popular />', function () {
  let component;
  beforeEach(function() {
    component = mount(
      <Popular />
    );
  });

  it('renders list of languages', function() {
    expect(component.find('li').length).toBe(6);
  });

  it('all is active by default', function () {
    expect(component.find('li.active').text()).toBe('All');
  });

  describe('clicking on a language', function () {
    beforeEach(function() {
      component.find('li').at(1).simulate('click');
    });
    it('sets the language to be active', function () {

      expect(component.find('li').at(1).props().className).toBe('active');
    });

    it('previous active is no longer active', function () {
      expect(component.find('li.active').text()).not.toBe('All');
    });
  });
});
