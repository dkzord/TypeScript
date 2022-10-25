type Name = { nome: string };
type LastName = { sobrenome: string };
type Age = { idade: number };

type Person = Name & LastName & Age;

const pessoa: Person = {
  nome: 'Fernando',
  sobrenome: 'Cavalcanti',
  idade: 27,
};

// console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

console.log('A' as Intersection);

export { pessoa };
