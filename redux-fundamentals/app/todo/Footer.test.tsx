import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Footer, { FooterProps } from './Footer';
import { FilterLink } from './FilterLink';

describe('<Footer />', function () {
  let wrapper: ShallowWrapper<any, any>;
  const onFilterClick = jest.fn();

  beforeEach(function() {
    wrapper = shallow(
      <Footer onFilterClick={onFilterClick} visibilityFilter="SHOW_ALL"/>,
    );
  });

  it('renders the filterLinks', function () {
    expect(wrapper.find(FilterLink).length).toBe(3);
  });

  describe('when a filter link is clicked', function () {
    it('invokes the onFilterClick prop', function () {
      const onFilterClick = wrapper.find(FilterLink).at(0).prop('onFilterClick');
      onFilterClick('SHOW_ALL');
      expect(onFilterClick).toHaveBeenCalledWith('SHOW_ALL');
    });
  });

  describe('when filter is active', function () {
    beforeEach(function() {
      wrapper = shallow(
        <Footer onFilterClick={onFilterClick} visibilityFilter="SHOW_ACTIVE"/>,
      );
    });
    it('show all filter link is not active', function () {
      const AllFilterLink = wrapper.find(FilterLink).at(0);
      expect(AllFilterLink.prop('active')).toBe(false);
    });

    it('indicates that show active filter link is active', function () {
      const AllFilterLink = wrapper.find(FilterLink).at(2);
      expect(AllFilterLink.prop('filter')).toEqual('SHOW_ACTIVE');
      expect(AllFilterLink.prop('active')).toBe(true);
    });
  });
});
