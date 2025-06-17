function greet (name: string): string {
  return `${name}`;
}

const greeting: string = greet('12');

const unknown: number = parseInt(greeting, 10);

console.log(greeting, unknown)

import { yeetYeet } from './src/moduleTest.js';

const returnValue: ComplexObject = yeetYeet();

console.log(returnValue.enum);

function test (name: string): void {
  console.log(name)
}


