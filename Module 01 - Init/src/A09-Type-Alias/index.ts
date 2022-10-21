type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corBoa?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Pedro',
  idade: 30,
  salario: 200000, // 200000
};

export function setCorPessoa(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corBoa: cor };
}

console.log(setCorPessoa(pessoa, 'Ciano'));
