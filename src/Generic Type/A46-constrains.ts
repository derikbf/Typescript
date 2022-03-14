type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacina: ['Vacina1', 'Vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacina')
const cor = obterChave(animal, 'cor')

console.log(vacinas, cor, obterChave(animal, 'idade'));
