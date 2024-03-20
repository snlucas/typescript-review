export function accessProperty(obj: { name: string }): void {
    try {
        const location = obj.location;
        console.log(`Location: ${location}`);
    } catch (error) {
        console.log('Error ', error.message);
    }
}