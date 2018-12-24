import { addCounter, counter, CounterAction, CounterListAction, incrementCounter, removeCounter } from './reducer';

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

describe('addCounter', () => {
    it('appends a new counter to the list', () => {
        const listBefore: number[] = [];
        const listAfter = [0];

        expect(addCounter(listBefore)).toEqual(listAfter);
        expect(listBefore.length).toBe(0);
    });
});

describe('removeCounter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
    expect(listBefore).toHaveLength(3);
});

describe('incrementCounter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    const action: CounterListAction = {
        type: 'INCREMENT',
        payload: {
            index: 1,
        }
    };

    expect(incrementCounter(listBefore, action)).toEqual(listAfter);
    expect(listBefore).toEqual([0, 10, 20]);
});
