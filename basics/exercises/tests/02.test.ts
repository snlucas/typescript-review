import { greet } from "../02/02";
import { describe, test, jest, afterEach, expect } from '@jest/globals';

afterEach(() => {
    jest.resetAllMocks();
});

describe('greet', () => {
    let spy = jest.spyOn(console, 'log');

    test('Should print greetings message with today date!', () => {
        let testPerson = 'John Doe';
        let testDate = new Date();
        let expectedMessage = `Greetings Mr(s). ${testPerson}! Today is ${testDate}`;

        greet(testPerson, testDate);
        expect(spy).toBeCalledWith(expectedMessage);
    });

    test('Should not call log!', () => {
        expect(spy).not.toHaveBeenCalled();
    });
});