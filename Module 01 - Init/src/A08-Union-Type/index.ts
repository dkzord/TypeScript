function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(10, 40));

const pessoa = {
  name: 'Pedro' as const,
  lastName: 'Henrique',
};

// console.log(pessoa.name);

function escolherCor(car: 'VERMELHO' | 'AMARELO' | 'AZUL'): string {
  return car;
}

console.log(escolherCor('VERMELHO'));

export default 1;
