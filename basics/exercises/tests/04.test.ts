import { sum, strictSum } from "../04/04";
import { test, describe, expect, jest, afterEach } from '@jest/globals';

afterEach(() => {
    jest.restoreAllMocks();
});

describe('sum', () => {
    test('Should concatenate!', () => {
        expect(sum('1', 'hello')).toBe('1hello');
    });

    test('Should sum!', () => {
        expect(sum(1, '2')).toBe('12');
    });
});

describe('strictSum', () => {
    test('Should accept numerical input!', () => {
        expect(strictSum(1, 2)).toBe(3);
    });
})