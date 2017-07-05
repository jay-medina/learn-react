import { visibilityFilter, TodoFilter } from './visibilityFilterReducer';

describe('todo/visibilityFilter', function () {
  it('handles default case', function () {
    const stateBefore = 'SHOW_ALL';
    expect(
      visibilityFilter(stateBefore, { type: 'UNKNOWN', filter: '' } as any),
    ).toBe(stateBefore);
  });

  it('handles no state case', function () {
    expect(visibilityFilter('' as TodoFilter, { type: 'UNKNOWN' } as any)).toEqual('SHOW_ALL');
  });

  it('sets the filter based on the action', function () {
    expect(
      visibilityFilter('SHOW_ALL', { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'}),
    ).toEqual('SHOW_COMPLETED');
  });
});
