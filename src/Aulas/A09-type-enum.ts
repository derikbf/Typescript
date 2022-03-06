enum Cores {
  vermelho = 10, 
  azul = 100,     
  amarelo = 200,  
  roxo = 'ROXO',
}

enum Cores {
  rosa = 'rosa',
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(121231234)

console.log('---- CORES')
console.log(Cores)
console.log('---- CORES.VERMELHO')
console.log(Cores.vermelho)
console.log(Cores[10])

console.log('---- CORES.ROXO')
console.log(Cores.roxo)
console.log('---- CORES.ROSA')
console.log(Cores.rosa)

