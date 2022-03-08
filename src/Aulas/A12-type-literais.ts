let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

pessoa.nome = 'Luiz';

function escolhaCorA(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCorA('Azul'))

// Module mode
export default 1;