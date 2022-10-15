/* function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

const result = multiplyArgs(1, 2, 3, 4);

console.log(result);
 */

export function concatenateString(...args: string[]): string {
  /* return args.reduce((ac, value) => ac + value); */
  return args.join('');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = toUpperCase('d', 'k');
console.log(result.join(''));

export { result };
