const nome: string = 'Luiz';
const idade: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
// const big: bigint = 10n;

let arrayOfNumbers: Array<number> = [ 1, 2, 3];
let arrayOfNumbers2: number[] = [ 1, 2, 3];
let arrayOfStrings: Array<string> = [ 'abc', 'def', 'ghi'];
let arrayOfStrings2: String[] = [ 'abc', 'def', 'ghi'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Luiz',
};

console.log(pessoa.nome);

function soma(x: number, y: number): number {
  return x + y 
};

const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result = soma(2, 2);
console.log(result)
