import {
  addCounter,
  counter,
  incrementCounter,
  removeCounter,
} from './reducer';

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

  describe('addCounter', function () {
    let listBefore: number[];

    beforeEach(function () {
      listBefore = [];
    });

    it('should add 0 to the counter list', function () {
      expect(addCounter(listBefore)).toEqual([0]);
    });

    it('should be different objects', function () {
      expect(addCounter(listBefore)).not.toBe([0]);
    });
  });

  describe('remove counter', function () {
    let listBefore: number[];

    beforeEach(function () {
      listBefore = [0, 10, 20];
    });

    it('should remove the second item in the list', function () {
      expect(removeCounter(listBefore, 1)).toEqual([0, 20]);
    });

    it('should be different objects', function () {
      expect(removeCounter(listBefore, 1)).not.toBe([0, 20]);
    });
  });

  describe('increment counter', function () {
    let listBefore: number[];

    beforeEach(function () {
      listBefore = [0, 10, 20];
    });

    it('should increment the second item in the list', function () {
      expect(incrementCounter(listBefore, 0)).toEqual([1, 10, 20]);
    });

    it('should be different objects', function () {
      expect(incrementCounter(listBefore, 0)).not.toBe([1, 10, 20]);
    });
  });

});
