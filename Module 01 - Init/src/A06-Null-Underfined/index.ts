let x;
if (typeof x === 'undefined') x = 20;
// console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return {
    firstName,
    lastName,
  };
}
/*
console.log(typeof createPerson);
console.log(createPerson('Fernando', 'Cavalcanti'));
console.log(createPerson('Lima')); */

export function squareOf(x: any) {
  return typeof x == 'number' ? Math.pow(x, 2) : 'String';
}

console.log(squareOf('pao'));
