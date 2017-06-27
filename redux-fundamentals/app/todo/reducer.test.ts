import {toggleTodo} from './reducer';

describe('todo/reducer', function() {
  describe('toggleTodo', function() {
    it('flips the completed attribute', function() {
      expect(
        toggleTodo({
          id: 0,
          text: 'Learn Redux',
          completed: false,
        }),
      ).toEqual({
        id: 0,
        text: 'Learn Redux',
        completed: true,
      });
    });
  });
});
