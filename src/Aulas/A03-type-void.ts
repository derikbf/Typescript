function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: "luiz",
  sobrenome: 'Otávio',
  
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};


semRetorno('Luiz', 'Otávio', "1");
pessoa.exibirNome();

export { pessoa };