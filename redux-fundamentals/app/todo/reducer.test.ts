import {todos, Todo, TodoAction} from './reducer';

describe('todo/reducer', function() {
  it('handles default case', function() {
    const stateBefore = [] as Todo[];

    expect(todos(stateBefore, {type: 'UNKNOWN'} as any)).toBe(stateBefore);
  });

  it('handles no state case', function () {
    expect(todos(undefined, { type: 'UNKNOWN' } as any)).toEqual([]);
  });

  describe('adding a todo', function() {
    it('adds a todo to an empty array', function() {
      const stateBefore = [] as Todo[];
      const after = todos(stateBefore, { id: 0, text: 'Learn Redux', type: 'ADD_TODO'});
      expect(after).toEqual([
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
      ]);
      expect(after).not.toBe(stateBefore);
    });
  });
});
