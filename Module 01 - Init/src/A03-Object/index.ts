const objectA = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Valor C';

const objectB: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectB.keyC = 'Value C';

console.log(objectB.keyA, objectB.keyB, objectB.keyC);
