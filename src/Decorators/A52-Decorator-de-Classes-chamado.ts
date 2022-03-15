function inverteNomeeCor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('sou o decorador e recebi', target)

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  }
}

@inverteNomeeCor
export class Animal {
  constructor( public nome: string, public cor: string ) {
    console.log('constructor. Sou a classe')
  }
}

const animal = new Animal('Pato', 'roxo');
console.log(animal);
