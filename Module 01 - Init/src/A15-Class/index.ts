export class Empresa {
  readonly nome: string; // PUBLIC IS DEFAULT
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const qtdColaboradores of this.colaboradores) {
      console.log(qtdColaboradores);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('DK AAAA', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Fernando', 'Cavalcanti');
const colaborador3 = new Colaborador('Teste git', 'AAAA');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(new Colaborador('Testando', 'Paulo'));
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();
