"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var _01_1 = require("./01");
(0, globals_1.afterEach)(function () {
    globals_1.jest.resetAllMocks();
});
(0, globals_1.describe)('analyzeMessage', function () {
    var spy = globals_1.jest.spyOn(console, 'log');
    (0, globals_1.test)('should print "Message is not callable" for non-function inputs!', function () {
        (0, _01_1.analyzeMessage)({ value: 'Hello' });
        (0, globals_1.expect)(spy).toHaveBeenCalledWith('Message is not callable');
        (0, _01_1.analyzeMessage)({ value: 123 });
        (0, globals_1.expect)(spy).toHaveBeenCalledWith('Message is not callable');
    });
    (0, globals_1.test)('Should print "Message is callable" for callable inputs!', function () {
        (0, _01_1.analyzeMessage)({ value: function () { return console.log('ok'); } });
        (0, globals_1.expect)(spy).toHaveBeenCalledWith('Message is callable');
    });
});
