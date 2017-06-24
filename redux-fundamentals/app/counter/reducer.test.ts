import {
  counterList,
} from './reducer';

describe('counter/reducer', function () {
  describe('initial state', function () {
    it('should return a list with a single counter', function () {
      expect(counterList(undefined, {} as any)).toEqual([]);
    });
  });

  describe('increment', function () {
    describe('when count is zero', function () {
      it('should become 1', function () {
        expect(counterList([0, 10, 20], { type: 'INCREMENT', index: 0 })).toEqual([1, 10, 20]);
      });
    });

    describe('when count is 1', function () {
      it('should become 2', function () {
        expect(counterList([1, 10, 20], { type: 'INCREMENT', index: 0 })).toEqual([2, 10, 20]);
      });
    });
  });

  describe('decrement', function () {
    describe('when count is 2', function () {
      it('should become 1', function () {
        expect(counterList([2, 10, 20], { type: 'DECREMENT', index: 0 })).toEqual([1, 10, 20]);
      });
    });

    describe('when count is 1', function () {
      it('should become 0', function () {
        expect(counterList([1, 10, 20], { type: 'DECREMENT', index: 0 })).toEqual([0, 10, 20]);
      });
    });
  });

  describe('unknown action', function () {
    describe('when count is 2', function () {
      it('should remain 2', function () {
        expect(counterList([1, 2, 20], { type: 'UNKNOWN', index: 1 })).toEqual([1, 2, 20]);
      });
    });
  });

  describe('addCounter', function () {
    it('should add 0 to the counter list', function () {
      expect(counterList([], {type: 'ADD_COUNTER'})).toEqual([0]);
    });

    it('should be different objects', function () {
      expect(counterList([], { type: 'ADD_COUNTER' })).not.toBe([0]);
    });
  });

  describe('remove counter', function () {
    let listBefore: number[];

    beforeEach(function () {
      listBefore = [0, 10, 20];
    });

    it('returns back original state if index is missing', function() {
      expect(counterList(listBefore, { type: 'REMOVE_COUNTER'})).toBe(listBefore);
    });

    it('should remove the second item in the list', function () {
      expect(counterList(listBefore, { type: 'REMOVE_COUNTER', index: 1 })).toEqual([0, 20]);
    });

    it('should be different objects', function () {
      expect(counterList(listBefore, { type: 'REMOVE_COUNTER', index: 1 })).not.toBe([0, 20]);
    });
  });
});
