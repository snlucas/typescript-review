interface Message {
    value: any;
}

export function analyzeMessage(message: Message): void {
    if (typeof message.value === 'function') {
        console.log('Message is callable');
    } else {
        console.log('Message is not callable');
    }
}

analyzeMessage({ value: 'oi' });
analyzeMessage({ value: () => console.log(42) });