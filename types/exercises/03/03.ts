export interface Shape {
    width: number;
    height: number;
};

export function printShape(shape: Shape): void {
    console.log('Shape: ');
    console.log(`width: ${shape.width}`);
    console.log(`height: ${shape.height}`);
    console.log('=========');
};