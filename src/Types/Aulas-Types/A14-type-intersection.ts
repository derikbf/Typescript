type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A'

type Intersecao = AB & AC & AD;
// 'A'

const pessoa: Pessoa = {
  idade: 30,
  nome: "Luiz",
  sobrenome: "Otávio",
};

console.log(pessoa);

export { pessoa };
