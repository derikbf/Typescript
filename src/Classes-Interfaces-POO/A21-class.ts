import { Colaborad } from './../../.history/src/Classes-Interfaces-POO/A21-class_20220308202615';
export class Empresa { // public readonly nome: string = 'Luiz';
  public readonly nome: string; // receberá o valor pelo constructor // não foi inicializado, só passamos as caracteristica dele
  private readonly colaboradores: Colaborador[] = []; // a class no typescript também funciona como um tipo
  protected readonly cnpj: string;  // readonly é pra não alterar o atributo fora da classe

  constructor(nome: string, cnpj: string) {   // pode receber parametros, valores de argumentos | esse parametro nome (valor), segue a convenção de receber o mesmo nome do atributo da class, no caso nome
    this.nome = nome; // this é usado para acessar o atributo da class | assim damos o valor a esse atributo, no caso, inicializamos o valor dele
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,  
  ) {}
}
// a classe é o molde para gerar o objeto

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Dérik', 'B. Favoretti')
const colaborador2 = new Colaborador('Sergio', 'Hondjakoff')
const colaborador3 = new Colaborador('Cabeção', 'da Malhação')
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
