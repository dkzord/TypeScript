// Use Any type only as a laster case
/* function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3, 4]));
console.log(showMessage('Ola mundo'));
console.log(showMessage(1));


// Return type void
function neverReturn(...args: string[]): void {
  console.log(args.join(' '));
}

neverReturn('Olá', 'mundo');
*/

const pessoa = {
  nome: 'Cavalcanti',
  sobrenome: 'Lima',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
