import { counter, CounterAction } from './reducer';

describe('counter', () => {
    const increment: CounterAction = {
        type: 'INCREMENT',
    };

    const decrement: CounterAction = {
        type: 'DECREMENT',
    };

    it('should return 1 on increment', () => {
        expect(counter(0, increment)).toBe(1);
    });

    it('should return 2 on increment', () => {
        expect(counter(1, increment)).toBe(2);
    });

    it('should return 1 on decrement', () => {
        expect(counter(2, decrement)).toBe(1);
    });

    it('should return 2 on increment', () => {
        expect(counter(1, decrement)).toBe(0);
    });

    it('should return back current state on bogus action', () => {
        expect(counter(1, { type: 'MEOW' } as any)).toBe(1);
    });

    it('should return back the initial state', () => {
      expect(counter(undefined, {} as any)).toBe(0);
    });
});
