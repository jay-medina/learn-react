import { counter, addCounter } from './reducer';

describe('counter/reducer', function () {

  describe('counter', function () {
    describe('initial state', function () {
      it('should return zero', function () {
        expect(counter(undefined, {} as any)).toBe(0);
      });
    });

    describe('increment', function () {
      describe('when count is zero', function () {
        it('should become 1', function () {
          expect(counter(0, { type: 'INCREMENT' })).toBe(1);
        });
      });

      describe('when count is 1', function () {
        it('should become 2', function () {
          expect(counter(1, { type: 'INCREMENT' })).toBe(2);
        });
      });
    });

    describe('decrement', function () {
      describe('when count is 2', function () {
        it('should become 1', function () {
          expect(counter(2, { type: 'DECREMENT' })).toBe(1);
        });
      });

      describe('when count is 1', function () {
        it('should become 0', function () {
          expect(counter(1, { type: 'DECREMENT' })).toBe(0);
        });
      });
    });

    describe('unknown action', function () {
      describe('when count is 2', function () {
        it('should remain 2', function () {
          expect(counter(2, { type: 'UNKNOWN' as any })).toBe(2);
        });
      });
    });
  });

  describe('addCounter', function() {
    let listBefore: Array<number>;

    beforeEach(function() {
      listBefore = [];
    });

    it('should add 0 to the counter list', function() {
      expect(addCounter(listBefore)).toEqual([0]);
    });

    it('should be different objects', function() {
      expect(addCounter(listBefore)).not.toBe([0]);
    });
  });

});
