type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'o texto',
  data: new Date(),
}

console.log(documento.data?.toDateString() ?? 'Ixi, não existe');
console.log(undefined ?? 'Ixi, não existe');
console.log(null ?? 'Ixi, não existe');
console.log(false ?? 'Ixi, não existe');
console.log(0 ?? 'Ixi, não existe');
console.log('' ?? 'Ixi, não existe');
