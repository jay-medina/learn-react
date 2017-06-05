import Counter from './Counter';

describe('Counter', function () {

  describe('initial state', function () {
    it('should return zero', function () {
      expect(Counter(undefined, {} as any)).toBe(0);
    });
  });

  describe('increment', function () {
    describe('when count is zero', function () {
      it('should become 1', function() {
        expect(Counter(0, {type: 'INCREMENT'})).toBe(1);
      });
    });

    describe('when count is 1', function () {
      it('should become 2', function() {
        expect(Counter(1, {type: 'INCREMENT'})).toBe(2);
      });
    });
  });

  describe('decrement', function () {
    describe('when count is 2', function () {
      it('should become 1', function() {
        expect(Counter(2, {type: 'DECREMENT'})).toBe(1);
      });
    });

    describe('when count is 1', function () {
      it('should become 0', function() {
        expect(Counter(1, {type: 'DECREMENT'})).toBe(0);
      });
    });
  });

  describe('unknown action', function () {
    describe('when count is 2', function () {
      it('should remain 2', function() {
        expect(Counter(2, {type: 'UNKNOWN' as any})).toBe(2);
      });
    });
  });
});
