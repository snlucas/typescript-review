export function printId(id: string | number): string {
    return typeof id === 'string' ? `Your ID is: ${id}` : `LOG ID: ${id}`;
}