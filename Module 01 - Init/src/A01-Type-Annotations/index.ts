const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Fernando',
  idade: 27,
};

console.log('Meu nome é', pessoa.nome, 'e minha idade:', pessoa.idade);

function som(x: number, y: number): number {
  return x + y;
}

const result = som(2, 2);

console.log(result);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2(4, 2));
