import { printShape, Shape } from "../exercises/03/03";
import { describe, expect, test, afterEach, jest } from '@jest/globals';

afterEach(() => {
    jest.resetAllMocks();
});

describe('printShape', () => {
    const spyLog = jest.spyOn(console, 'log');

    test('Given a Shape should log its width and height!', () => {
        const width: number = 4;
        const height: number = 3;
        const shape: Shape = { width: width, height: height };

        const expectedLogMessages = [
            'Shape: ',
            `width: ${shape.width}`,
            `height: ${shape.height}`,
            '========='
        ];

        printShape(shape);
        expectedLogMessages.forEach((message, index) => {
            expect(spyLog).toHaveBeenNthCalledWith(index + 1, message);
        });
    });
});