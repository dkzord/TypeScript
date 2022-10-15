// Tuples exist only in TypeScript
export const dataClient1: [number, string, string?] = [1, 'Fernando']; // Mutable
export const dataClient2: readonly [number, string, string?] = [1, 'Fernando']; // Immutable

dataClient1[0] = 100;
dataClient1[1] = 'Cavalcanti';
// console.log(dataClient1);

// Array readonly
const array01: readonly string[] = ['Fernando', 'Cavalcanti'];
const array02: ReadonlyArray<string> = ['Fernando', 'Cavalcanti'];

console.log(array01);
console.log(array02);
