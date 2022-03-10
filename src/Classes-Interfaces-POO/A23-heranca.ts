export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return 'Geral: ' + this.nome + ' ' + this.sobrenome;
  }  
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Aluno: ' + this.nome + ' ' + this.sobrenome;
  }  
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }  
}

const pessoa = new Pessoa('Dérik', 'Barcellos', 36, '111111111');
const aluno = new Aluno('Dérik', 'Barcellos', 36, '222222222');
const cliente = new Cliente('Dérik', 'Barcellos', 30, '00.000.000/0001-10');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
