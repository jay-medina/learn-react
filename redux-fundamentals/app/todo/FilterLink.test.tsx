import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { FilterLink } from './FilterLink';

describe('FilterLink', function () {
  let wrapper: ShallowWrapper<any, any>;
  const dispatch = jest.fn();

  describe('active', function () {
    beforeEach(function () {
      wrapper = shallow(
        <FilterLink dispatch={dispatch} filter={'SHOW_COMPLETED'} active />,
      );
    });

    it('renders a span tag', function () {
      expect(wrapper.find('span').length).toBe(1);
    });

    it('does not render the anchor tag', function () {
      expect(wrapper.find('a').length).toBe(0);
    });
  });
  describe('inactive', function () {
    beforeEach(function () {
      wrapper = shallow(
        <FilterLink dispatch={dispatch} filter={'SHOW_COMPLETED'} />,
      );
    });

    it('renders an anchor tag with whatever child is passed in', function () {
      expect(wrapper.find('a').length).toBe(1);
    });

    describe('when clicked', function () {
      beforeEach(function () {
        wrapper.find('a').simulate('click', {
          preventDefault: jest.fn(),
        });
      });

      it('dispatches a set visibility filter', function () {
        expect(dispatch).toHaveBeenCalledWith({
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_COMPLETED',
        });
      });
    });
  });
});
