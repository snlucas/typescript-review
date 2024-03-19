import { describe, expect, it, test, jest, afterEach } from '@jest/globals';
import { analyzeMessage } from './01';

afterEach(() => {
    jest.resetAllMocks();
});

describe('analyzeMessage', () => {
    let spy = jest.spyOn(console, 'log');
    
    test('should print "Message is not callable" for non-function inputs!', () => {
        analyzeMessage({ value: 'Hello' });
        expect(spy).toHaveBeenCalledWith('Message is not callable');

        analyzeMessage({ value: 123 });
        expect(spy).toHaveBeenCalledWith('Message is not callable');
    });

    test('Should print "Message is callable" for callable inputs!', () => {
        analyzeMessage({ value: () => console.log('ok') });
        expect(spy).toHaveBeenCalledWith('Message is callable');
    });
})