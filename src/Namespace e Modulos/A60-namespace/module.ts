namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Luiz');
  // console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';

// const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
// console.log(pessoaDoNamespace);
// console.log(MeuNamespace.nomeDoNamespace);
// console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
