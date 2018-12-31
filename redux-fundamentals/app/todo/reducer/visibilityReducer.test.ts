import { visibilityFilter } from './visibilityReducer';

describe('visibility filter', () => {
    test('default', () => {
        expect(visibilityFilter(undefined, {} as any)).toEqual('SHOW_ALL');
    });
});
