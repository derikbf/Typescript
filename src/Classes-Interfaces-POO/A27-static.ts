export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '00.000.000-11';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  
  metodoNormal(): void { // não consegue acessar o método static
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
  
  // metodo estático
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }
  
}

const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)