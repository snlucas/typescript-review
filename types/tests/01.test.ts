import { printId } from "../exercises/01/01";
import { test, expect, describe, jest } from '@jest/globals';

describe('printId', () => {
    const stringInput = '123';
    const numberInput = 123;

    const expectedOutputWhenString = `Your ID is: ${stringInput}`;
    const expectedOutputWhenNumber = `LOG ID: ${numberInput}`;

    test('Should return input message for string type expected message!', () => {
        expect(printId(stringInput)).toBe(expectedOutputWhenString);
    });

    test('Should return input message for number type expected message!', () => {
        expect(printId(numberInput)).toBe(expectedOutputWhenNumber);
    });
});