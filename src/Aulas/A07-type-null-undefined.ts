let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
    firstName: string, 
    lastName?: string   // abertura da função
  ): {
    firstName: string;
    lastName?: string;  // type anotation
} {
  return {
    firstName,          // corpo da função
    lastName,
  }
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}

