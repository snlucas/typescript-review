"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeMessage = void 0;
function analyzeMessage(message) {
    if (typeof message.value === 'function') {
        console.log('Message is callable');
    }
    else {
        console.log('Message is not callable');
    }
}
exports.analyzeMessage = analyzeMessage;
analyzeMessage({ value: 'oi' });
analyzeMessage({ value: function () { return console.log(42); } });
