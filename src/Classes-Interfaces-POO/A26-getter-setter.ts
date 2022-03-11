export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(valor: string) {
    console.log('SETTER CHAMADO')
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO')
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '123.4569-98741-01';
console.log(pessoa.cpf);
