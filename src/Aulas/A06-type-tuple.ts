const dadosCliente01: readonly [number, string] = [1, 'W']; 
const dadosCliente02: [number, string, string] = [1, 'W', 'Miranda']; 
const dadosCliente03: [number, string, string?] = [1, 'W']; 
const dadosCliente04: [number, string, ...string[]] = [1, 'W', 'Miranda']; 

// dadosCliente01[0] = 100;
// dadosCliente01[1] = 'Cap. América';

dadosCliente02[2] = 'Vieira';

dadosCliente03[2] = "1";

console.log(dadosCliente01);
console.log(dadosCliente02);
console.log(dadosCliente03);
console.log(dadosCliente04);

const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1)
console.log(array2)